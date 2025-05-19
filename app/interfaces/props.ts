import type { Prompt } from "./objects";
import type { buttonVariants, iconVariants } from "./variantsStyles";

export interface GenericButtonProps {
  text: string;
  buttonVariant: buttonVariants;
  iconName?: iconVariants;
  onClickHandler?: () => void;
}

export interface IconProps {
  iconName: iconVariants;
  margin_right?: number;
}

export interface PromptComponenteProps {
  prompt: Prompt;
}

