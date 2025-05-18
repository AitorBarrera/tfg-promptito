import type { GenericButtonProps } from "~/interfaces/props";
import { buttonVariantsRecord } from "~/interfaces/variantsStyles";
import { Icon } from "./Icon";

export const GenericButton = ({
  text,
  buttonVariant,
  iconName,
  onClickHandler,
}: GenericButtonProps) => {
  return (
    <>
      <button
        className={`border-2 rounded-[20px] py-2 px-6 cursor-pointer hover:bg-red-500 transition ${buttonVariantsRecord[buttonVariant]}`}
      >
        {iconName && <Icon iconName={iconName} margin_right={10} />}
        <span className="text-text">{text}</span>
      </button>
    </>
  );
};
