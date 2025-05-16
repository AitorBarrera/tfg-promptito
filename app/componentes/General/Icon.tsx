import type { IconProps } from "~/interfaces/props";
import { iconVariantsRecord } from "~/interfaces/variantsStyles";

export const Icon = ({ iconName, margin_right = 0 }: IconProps) => {
  return (
    <i
      className={`${iconVariantsRecord[iconName]}`}
      style={{ marginRight: `${margin_right}px` }}
    />
  );
};
