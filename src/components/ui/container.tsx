import { cn } from "@/lib/cn";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("max-w-5xl mx-auto w-full px-4 md:px-6 lg:px-8 xl:px-10", className)}
    >
      {children}
    </div>
  );
}




export function BlogContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("max-w-3xl mx-auto w-full px-4 md:px-6 lg:px-8 xl:px-10", className)}
    >
      {children}
    </div>
  );
}
