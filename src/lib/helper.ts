import { render } from "@react-email/render";

export const StripeHelper = async (event) => {
  switch (event.type) {
    case "product.created": {
      const product = event.data.object;

      await prisma.plan.create({
        data: {
          id: product.id,
          name: product.name,
          photo: product.images[0],
          description: product.description,
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
        await prisma.plan.update({
          where: { id: product.id },
          data: updateData,
        });
      } else {
        console.log("No relevant product fields changed — skipping update.");
      }

      break;
    }
    case "product.deleted": {
      const product = event.data.object;
      await prisma.plan.update({
        where: { id: product.id },
        data: {
          isActive: false,
        },
      });
      break;
    }
  }
};

export const generateTemplate = (template: React.ReactNode) => {
  return render(template);
};
