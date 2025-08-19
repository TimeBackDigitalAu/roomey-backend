import { render } from "@react-email/render";
import Stripe from "stripe";
import { prisma } from "./prisma/prisma";

export const StripeHelper = async (event: Stripe.Event) => {
  switch (event.type) {
    case "product.created": {
      const product = event.data.object;

      await prisma.plan_table.create({
        data: {
          plan_id: product.id,
          plan_name: product.name,
          plan_photo: product.images[0],
          plan_description: product.description,
          plan_is_active: true,
          plan_created_at: new Date(),
        },
      });
      break;
    }
    case "product.updated": {
      const product = event.data.object;
      const metadata = product.metadata;
      const previous = event.data.previous_attributes ?? {};

      const updateData: any = {};

      if (previous.name !== undefined) {
        updateData.plan_name = product.name;
      }

      if (previous.default_price !== undefined) {
        updateData.plan_price_id = product.default_price;
      }

      if (previous.description !== undefined) {
        updateData.plan_description = product.description;
      }

      // Always sync metadata
      updateData.plan_role_available = metadata.plan_role_available;
      updateData.plan_type = metadata.plan_type;
      updateData.plan_limit = metadata.plan_limit;

      await prisma.plan_table.upsert({
        where: { plan_id: product.id },
        update: updateData,
        create: {
          plan_id: product.id,
          plan_name: product.name,
          plan_photo: product.images[0],
          plan_description: product.description,
          plan_price_id: product.default_price as string,
          plan_role_available: metadata.plan_role_available,
          plan_type: metadata.plan_type,
          plan_limit: metadata.plan_limit,
          plan_is_active: true,
          plan_created_at: new Date(product.created * 1000), // Stripe gives timestamp in seconds
        },
      });

      break;
    }

    case "product.deleted": {
      const product = event.data.object;
      await prisma.plan_table.update({
        where: { plan_id: product.id },
        data: {
          plan_is_active: false,
        },
      });
      break;
    }
  }
};

export const generateTemplate = (template: React.ReactNode) => {
  return render(template);
};

export const formatElapsedTime = (elapsedMs: number) => {
  const minutes = Math.floor(elapsedMs / (1000 * 60));
  const hours = Math.floor(elapsedMs / (1000 * 60 * 60));
  const days = Math.floor(elapsedMs / (1000 * 60 * 60 * 24));

  if (days >= 1) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours >= 1) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  }
};
