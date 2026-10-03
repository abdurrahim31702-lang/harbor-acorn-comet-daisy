import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 min-h-11 rounded-full font-medium transition-transform duration-150 ease-out active:not-disabled:scale-[0.96] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent",
  {
    variants: {
      variant: {
        primary: "bg-fg text-bg hover:bg-fg/90 px-5 text-sm",
        ghost:
          "bg-transparent text-fg border border-line hover:border-line-strong hover:bg-fg/5 px-5 text-sm",
        quiet: "bg-transparent text-muted hover:text-fg px-3 text-sm",
      },
      size: {
        default: "",
        compact: "min-h-10 px-4 text-xs",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({
  className,
  variant,
  size,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
