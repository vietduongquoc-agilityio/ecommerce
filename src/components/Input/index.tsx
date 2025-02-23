import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

export type InputType = "text" | "number";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  typeInput?: InputType;
  asChild?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ typeInput = "text", asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "input";

    return (
      <Comp
        ref={ref}
        type={typeInput}
        className={`border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
