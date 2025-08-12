# ---------- Base (shared) ----------
    FROM node:20.10-slim AS base
    WORKDIR /app
    
    # System deps (doppler + tools you need everywhere)
    RUN apt-get update && apt-get install -y \
      curl bash openssl wget ca-certificates gnupg dos2unix unzip \
      && rm -rf /var/lib/apt/lists/*
    
    # Doppler CLI
    RUN curl -sLf --retry 3 --tlsv1.2 --proto "=https" \
      'https://packages.doppler.com/public/cli/gpg.DE2A7741A397C129.key' \
      | gpg --dearmor -o /usr/share/keyrings/doppler-archive-keyring.gpg && \
      echo "deb [signed-by=/usr/share/keyrings/doppler-archive-keyring.gpg] https://packages.doppler.com/public/cli/deb/debian any-version main" \
      > /etc/apt/sources.list.d/doppler-cli.list && \
      apt-get update && apt-get install -y doppler && \
      rm -rf /var/lib/apt/lists/*
    
    # ✅ Activate pnpm via Corepack (available in Node 20 images)
    #    Do this in the base so all child stages inherit it.
    RUN corepack enable && corepack prepare pnpm@10.4.1 --activate
    
    # ---------- Builder ----------
    FROM base AS builder
    WORKDIR /app
    
    # (Optional) native build tools for node-gyp builds
    RUN apt-get update && apt-get install -y python3 make g++ libssl-dev && rm -rf /var/lib/apt/lists/*
    
    # Copy package files and install dependencies
    COPY package.json pnpm-lock.yaml ./
    # COPY .npmrc ./.npmrc   # uncomment if you use a private registry
    RUN pnpm install --frozen-lockfile
    
    # Copy source and config files
    COPY tsconfig.json ./
    COPY prisma ./prisma
    COPY src ./src
    COPY scripts ./scripts
    
    # Generate Prisma client & build
    RUN pnpm run prisma:generate
    RUN pnpm run build
    
    # Install only production deps (smaller runtime)
    RUN pnpm install --prod --frozen-lockfile
    
    # ---------- Runtime ----------
    FROM base AS runner
    WORKDIR /app
    
    ENV NODE_ENV=production
    ENV PORT=8080
    
    # Minimal runtime libs (Prisma engines often need libssl3)
    RUN apt-get update && apt-get install -y libssl3 && rm -rf /var/lib/apt/lists/*
    
    # Non-root user
    RUN addgroup --system --gid 1001 nodejs && \
        adduser --system --uid 1001 --home /home/roomey --ingroup nodejs roomey
    
    # Copy production artifacts
    COPY --from=builder --chown=roomey:nodejs /app/node_modules ./node_modules
    COPY --from=builder --chown=roomey:nodejs /app/dist ./dist
    COPY --from=builder --chown=roomey:nodejs /app/package.json ./package.json
    COPY --from=builder --chown=roomey:nodejs /app/prisma ./prisma
    
    # Entrypoint
    COPY --from=builder --chown=roomey:nodejs /app/scripts/entrypoint_overwrited.sh /app/entrypoint.sh
    RUN dos2unix /app/entrypoint.sh && chmod +x /app/entrypoint.sh
    
    USER roomey
    EXPOSE 8080
    
    ENTRYPOINT ["/app/entrypoint.sh"]

    CMD ["pnpm", "start"]
