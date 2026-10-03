import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-xl border border-line bg-fg/4 px-4 text-sm text-fg placeholder:text-subtle",
        "transition-[border-color,box-shadow] duration-150 ease-out",
        "hover:border-line-strong focus-visible:border-accent focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_color-mix(in_oklab,var(--color-accent)_28%,transparent)]",
        className,
      )}
      {...props}
    />
  );
}

export function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full rounded-xl border border-line bg-fg/4 px-4 py-3 text-sm text-fg placeholder:text-subtle",
        "transition-[border-color,box-shadow] duration-150 ease-out",
        "hover:border-line-strong focus-visible:border-accent focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_color-mix(in_oklab,var(--color-accent)_28%,transparent)]",
        className,
      )}
      {...props}
    />
  );
}

export function Label({
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn("caps mb-2 block text-muted", className)}
      {...props}
    />
  );
}
