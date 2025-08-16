import { clsx } from "clsx";
import type React from "react";

interface FlexBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: React.CSSProperties["flexDirection"];
  justify?: React.CSSProperties["justifyContent"];
  align?: React.CSSProperties["alignItems"];
  wrap?: React.CSSProperties["flexWrap"];
  gap?: string | number;
  grow?: number;
  shrink?: number;
  basis?: React.CSSProperties["flexBasis"];
  inline?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Flexbox = ({
  direction = "row",
  justify = "flex-start",
  align = "stretch",
  wrap = "nowrap",
  gap = 0,
  grow,
  shrink,
  basis,
  inline = false,
  children,
  className,
  ...props
}: FlexBoxProps) => {
  const styles: React.CSSProperties = {
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    flexWrap: wrap,
    gap: gap,
    flexGrow: grow,
    flexShrink: shrink,
    flexBasis: basis,
  };

  return (
    <div className={clsx(inline ? "inline-flex" : "flex", className)} style={styles} {...props}>
      {children}
    </div>
  );
};
