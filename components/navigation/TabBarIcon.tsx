import Ionicons from "@expo/vector-icons/Ionicons";
import { type IconProps } from "@expo/vector-icons/build/createIconSet";
import { type ComponentProps } from "react";

// Define a reusable TabBarIcon component
export function TabBarIcon({
  style,
  name,
  color,
  size = 28,
}: IconProps<ComponentProps<typeof Ionicons>["name"]>) {
  return (
    <Ionicons
      name={name}
      color={color}
      size={size}
      style={[{ marginBottom: -3 }, style]}
    />
  );
}
