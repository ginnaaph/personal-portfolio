import { buttonVariants } from "./buttonVariants";
import { cn } from "@/lib/utils";
import { Button as ButtonPrimitive } from "@base-ui/react/button";




export const  Button = () => {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants())}
    />
  );
}

Button.displayName = "Button";