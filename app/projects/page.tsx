import Signin from "@/components/auth/signin";
import Signout from "@/components/auth/signout";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function ProjectsPage() {
  const session = await auth();
  const projects = await prisma.project.findMany({
    where: { ownerId: session?.user?.id },
  });
  console.log("🚀 ~ ProjectsPage ~ projects:", projects);
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Signin />
      <Signout />
      <Button>New Project</Button>
    </div>
  );
}
