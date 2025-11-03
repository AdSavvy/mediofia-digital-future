import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transform-gpu",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 hover:shadow-lg",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:scale-105",
        outline:
          "border-2 border-primary/30 bg-transparent text-foreground hover:bg-primary/10 hover:border-primary/50 hover:scale-105",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:scale-105",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "relative bg-gradient-to-r from-primary via-primary to-secondary text-white overflow-hidden group hover:scale-105 shadow-[0_0_40px_rgba(0,123,255,0.4)] hover:shadow-[0_0_60px_rgba(0,123,255,0.6),0_0_100px_rgba(187,0,255,0.3)] border-2 border-primary/50 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700",
        gradient: "relative bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] text-white hover:bg-[position:100%_0] hover:scale-105 shadow-[0_8px_30px_rgba(0,123,255,0.4)] hover:shadow-[0_12px_40px_rgba(0,123,255,0.6)] border border-primary/40 overflow-hidden",
        glass: "relative bg-white/5 backdrop-blur-2xl text-white border-2 border-white/20 hover:bg-white/10 hover:border-white/40 hover:scale-105 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] overflow-hidden",
        neon: "relative bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 shadow-[0_0_20px_rgba(0,123,255,0.3),inset_0_0_20px_rgba(0,123,255,0.1)] hover:shadow-[0_0_40px_rgba(0,123,255,0.6),inset_0_0_40px_rgba(0,123,255,0.2)]",
        cyber: "relative bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-xl text-foreground border border-primary/40 hover:border-primary hover:scale-105 hover:shadow-[0_0_30px_rgba(0,123,255,0.4)] before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/0 before:to-secondary/0 hover:before:from-primary/10 hover:before:to-secondary/10 before:transition-all",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-16 rounded-2xl px-12 text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
