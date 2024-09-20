import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, beforeIcon, afterIcon, ...props }, ref) => {
  return (
    <div className="flex items-center border border-input rounded-md bg-transparent">
      {beforeIcon && <div className="px-2">{beforeIcon}</div>}
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border-0 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
      {afterIcon && <div className="px-2">{afterIcon}</div>}
    </div>
  );
});
Input.displayName = "Input";

export { Input };
