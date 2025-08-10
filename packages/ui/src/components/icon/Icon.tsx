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
  const variantConfig = iconVariants[variant];
  const sizeValue = getSizeValue(size);

  const styles: React.CSSProperties = {
    fontSize: sizeValue,
    color,
    fontVariationSettings: `'FILL' ${filled ? "1" : "0"}, 'wght' ${variantConfig.wght}, 'GRAD' ${variantConfig.grad}, 'opsz' ${variantConfig.opsz}`,
  };

  return (
    <span
      className={clsx("material-symbols-outlined select-none", variantConfig.classes, className)}
      style={styles}
      {...props}
    >
      {name}
    </span>
  );
};
