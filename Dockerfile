# Stage 1: Base image with Bun and Doppler
FROM node:20.10-slim AS base

# Install dependencies
RUN apt-get update && apt-get install -y \
  curl \
  bash \
  openssl \
  wget \
  ca-certificates \
  gnupg \
  dos2unix \
  unzip \
  && rm -rf /var/lib/apt/lists/*

# Install Doppler CLI
RUN apt-get update && apt-get install -y apt-transport-https ca-certificates curl gnupg && \
    curl -sLf --retry 3 --tlsv1.2 --proto "=https" 'https://packages.doppler.com/public/cli/gpg.DE2A7741A397C129.key' | \
    gpg --dearmor -o /usr/share/keyrings/doppler-archive-keyring.gpg && \
    echo "deb [signed-by=/usr/share/keyrings/doppler-archive-keyring.gpg] https://packages.doppler.com/public/cli/deb/debian any-version main" > /etc/apt/sources.list.d/doppler-cli.list && \
    apt-get update && apt-get install -y doppler

# Stage 2: Builder
FROM base AS builder
WORKDIR /app

RUN npm install -g pnpm

# Copy package files and install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --ignore-scripts


# Copy source and config files
COPY tsconfig.json ./
COPY prisma ./prisma
COPY src ./src

# Generate Prisma client
RUN pnpm run prisma:generate

# Build the application
RUN pnpm run build

# Reinstall production-only dependencies
RUN pnpm install --production --ignore-scripts


# Stage 3: Final runtime image
FROM base AS runner
WORKDIR /app

# Create a non-root user with a proper home directory for Doppler
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 --home /home/roomey roomey && \
    mkdir -p /home/roomey && chown -R roomey:nodejs /home/roomey

# Copy app files from builder with correct ownership
COPY --from=builder --chown=roomey:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=roomey:nodejs /app/dist ./dist
COPY --from=builder --chown=roomey:nodejs /app/package.json ./package.json
COPY --from=builder --chown=roomey:nodejs /app/prisma ./prisma

# Copy and prepare entrypoint script
COPY scripts/entrypoint_overwrited.sh /app/entrypoint.sh
RUN dos2unix /app/entrypoint.sh && chmod +x /app/entrypoint.sh

# Ensure /app is owned by non-root user
RUN chown -R roomey:nodejs /app

# Use non-root user
USER roomey

# Set environment variables and expose port
ENV PORT=4000
EXPOSE 4000

# Entrypoint and default command
ENTRYPOINT ["/app/entrypoint.sh"]
CMD ["pnpm", "start:prod"]
