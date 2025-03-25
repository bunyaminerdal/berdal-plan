import { prisma } from "@/lib/prisma";
import { ProjectSchema } from "@/lib/schemas";

export const createProject = async (
  name: string,
  description: string,
  ownerId: string
) => {
  const verifiedFields = ProjectSchema.safeParse({
    name,
    description,
    ownerId,
  });

  if (!verifiedFields.success) return null;
  return await prisma.project.create({
    data: {
      name,
      description,
      ownerId,
    },
  });
  
};
