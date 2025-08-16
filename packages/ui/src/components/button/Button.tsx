import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import type React from "react";
import { Icon } from "../icon";
import { type ButtonVariants, buttonSlotsBySize, buttonVariants } from "./variants";

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  size?: "small" | "medium" | "large";
  property?: "default" | "hover" | "pressed" | "disabled";
  icon?: "none" | "left" | "right" | "only";
  variant?: "contained" | "outlined";
  rounded?: boolean;
  children?: React.ReactNode;
  iconName?: string;
  className?: string;
  disabled?: boolean;
  buttonType?: "button" | "submit" | "reset";
  asChild?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  size = "medium",
  property = "default",
  icon = "none",
  variant = "contained",
  rounded = false,
  children,
  iconName,
  className,
  disabled = false,
  buttonType = "button",
  asChild = false,
  ...props
}) => {
  const buttonClasses = buttonVariants({
    size,
    property: disabled ? "disabled" : property,
    icon,
    type: variant,
    rounded,
  });

  const slots = buttonSlotsBySize[size];
  const Comp = asChild ? Slot : "button";

  const renderIcon = (position: "left" | "right") => {
    if (!iconName || icon === "none") return null;
    if (icon !== position && icon !== "only") return null;

    return (
      <Icon
        name={iconName}
        className={slots.icon.classes}
        style={{
          fontVariationSettings: `'FILL' 0, 'wght' ${slots.icon.wght}, 'GRAD' ${slots.icon.grad}, 'opsz' ${slots.icon.opsz}`,
        }}
      />
    );
  };

  const renderContent = () => {
    if (icon === "only") {
      return renderIcon("left");
    }

    return (
      <>
        {renderIcon("left")}
        {children && <span className={slots.text}>{children}</span>}
        {renderIcon("right")}
      </>
    );
  };

  return (
    <Comp
      type={asChild ? undefined : buttonType}
      className={clsx(buttonClasses, className)}
      disabled={disabled}
      {...props}
    >
      {renderContent()}
    </Comp>
  );
};
