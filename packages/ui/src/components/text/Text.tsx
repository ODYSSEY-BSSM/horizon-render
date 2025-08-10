import { clsx } from "clsx";
import type React from "react";
import { type TextVariant, textVariants } from "./variants";

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TextVariant;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  className?: string;
  children: React.ReactNode;
  color?: string;
  width?: string | number;
  textAlign?: "left" | "center" | "right" | "justify";
  whiteSpace?: "normal" | "nowrap" | "pre" | "pre-wrap" | "pre-line";
  ellipsis?: boolean;

  "aria-label"?: string;
  "aria-describedby"?: string;
  "aria-labelledby"?: string;
  role?: string;
}

export const Text: React.FC<TextProps> = ({
  variant = "B1",
  as: Component = "p",
  className,
  children,
  color,
  width = "auto",
  textAlign = "left",
  whiteSpace = "normal",
  ellipsis = false,
  ...props
}) => {
  const baseClasses = textVariants[variant];

  const ellipsisClasses = ellipsis ? "overflow-hidden text-ellipsis whitespace-nowrap" : "";

  const widthValue = typeof width === "number" ? `${width}px` : width;

  const styles: React.CSSProperties = {
    color,
    width: widthValue,
    textAlign,
    whiteSpace: ellipsis ? "nowrap" : whiteSpace,
  };

  return (
    <Component
      className={clsx(baseClasses, "font-suit", ellipsisClasses, className)}
      style={styles}
      {...props}
    >
      {children}
    </Component>
  );
};
