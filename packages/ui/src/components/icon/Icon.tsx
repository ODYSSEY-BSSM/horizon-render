import { clsx } from "clsx";
import type React from "react";
import { getSizeValue } from "../../utils";
import { type IconVariant, iconVariants } from "./variants";

interface IconProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
  variant?: IconVariant;
  filled?: boolean;
  size?: number | string;
  color?: string;
  className?: string;

  "aria-label"?: string;
  "aria-describedby"?: string;
  "aria-labelledby"?: string;
  role?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  variant = "MD",
  filled = false,
  size,
  color,
  className,
  ...props
}) => {
  const baseClasses = iconVariants[variant];
  const fillClass = filled ? "icon-fill-1" : "icon-fill-0";
  const sizeValue = getSizeValue(size);

  const styles: React.CSSProperties = {
    fontSize: sizeValue,
    color,
  };

  return (
    <span
      className={clsx("material-symbols-outlined select-none", baseClasses, fillClass, className)}
      style={styles}
      {...props}
    >
      {name}
    </span>
  );
};
