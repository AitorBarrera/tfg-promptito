import type { ChangeEventHandler } from "react";
import type { Filters, Prompt } from "./objects";
import type { buttonVariants, iconVariants } from "./variantsStyles";
import type { StatsBase } from "fs";

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

export interface FilterFormProps {
  filterState: Filters;
  handleInputChange: ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >;
  handleSelectChange: ChangeEventHandler<HTMLSelectElement>;
  // handleInputChange: ChangeEventHandler<HTMLInputElement>;
}

export interface FilterFormLlmsProps {
  handleInputChange: ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >;
}

export interface FilterFormTematicasProps {
  handleInputChange: ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >;
}
