import * as React from "react"
import { cn } from "@/lib/utils"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { buttonVariants, type ButtonVariants } from "./buttonVariants"


export type ButtonProps =
  React.ComponentPropsWithoutRef<typeof ButtonPrimitive> &
    ButtonVariants

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <ButtonPrimitive
        ref={ref}
        data-slot="button"
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export default Button
