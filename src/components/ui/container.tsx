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
      className={cn(
        "max-w-5xl mx-auto w-full px-4 md:px-6 lg:px-8 xl:px-10",
        className,
      )}
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
      className={cn(
        "max-w-3xl mx-auto w-full px-4 md:px-6 lg:px-8 xl:px-10",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function C({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl", className)}>{children}</div>
  );
}

// div props
type PageContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: "default" | "xl" | "full" | "sm" | "xs";
};

export function PageContainer({
  size = "default",
  children,
  className,
}: PageContainerProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-6xl min-w-0 flex-1 px-4 sm:px-6 lg:px-8",
        {
          "max-w-screen-2xl": size === "xl",
          "max-w-full": size === "full",
          "max-w-4xl": size === "sm",
          "max-w-2xl": size === "xs",
        },
        className,
      )}
    >
      {/* Background grid */}
      {/* <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="
            grid h-full w-full
            grid-cols-4
            md:grid-cols-6
            xl:grid-cols-8
            2xl:grid-cols-10
          "
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="border-l border-white/[0.035]" />
          ))}
        </div>
      </div> */}
      {children}
    </div>
  );
}

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "xl" | "full" | "sm" | "xs";
}

export function DashboardPageContainer({
  size = "default",
  className,
  children,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "relative w-full flex-1 px-4 py-4 sm:px-6",
        // {
        //   "max-w-screen-2xl": size === "xl",
        //   "max-w-full": size === "full",
        //   "max-w-4xl": size === "sm",
        //   "max-w-2xl": size === "xs",
        // },
        className,
      )}
    >
      {children}
    </div>
  );
}
