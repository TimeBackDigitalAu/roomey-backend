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
      const previous = event.data.previous_attributes ?? {};

      const updateData: any = {};

      if (previous.name !== undefined) {
        updateData.name = product.name;
      }

      if (previous.default_price !== undefined) {
        updateData.priceId = product.default_price;
      }

      if (previous.description !== undefined) {
        updateData.description = product.description;
      }

      if (Object.keys(updateData).length > 0) {
        await prisma.plan_table.update({
          where: { plan_id: product.id },
          data: updateData,
        });
      } else {
        console.log("No relevant product fields changed — skipping update.");
      }

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
