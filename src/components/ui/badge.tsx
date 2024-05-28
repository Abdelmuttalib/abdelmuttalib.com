import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/60",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        // outline: "text-foreground",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",

        brand:
          "border-transparent bg-neutral-200 dark:bg-neutral-800 text-[#151515] dark:text-neutral-300",
      },
    },

    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
