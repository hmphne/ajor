import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, beforeIcon, afterIcon, ...props }, ref) => {
  return (
    <div className="flex items-center border border-input rounded-lg bg-transparent h-[50px]">
      {beforeIcon && <div className="pr-3">{beforeIcon}</div>}
      <input
        type={type}
        className={cn(
          "flex w-full border-0 bg-transparent p-3 text-sm shadow-sm transition-colors placeholder:text-right placeholder:text-gray-dark focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
      {afterIcon && <div className="border-l border-gray-300 h-[42px] py-1 mr-2 ml-4" />}
      {afterIcon && <div className="pl-3 text-gray">{afterIcon}</div>}
    </div>
  );
});
Input.displayName = "Input";

export { Input };
