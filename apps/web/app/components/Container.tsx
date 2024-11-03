import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={cn("h-full mx-auto px-4 md:px-36", className)}>
      {children}
    </div>
  );
};

export default Container;
