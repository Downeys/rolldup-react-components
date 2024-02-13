import { MouseEventHandler } from "react";
import { IconProps } from "../../common/types";
interface CardButtonProps {
    icon?: (props: IconProps) => JSX.Element;
    clickHandler: MouseEventHandler;
    styling?: string;
    selected?: boolean;
}
export declare const CardButton: (props: CardButtonProps) => import("react/jsx-runtime").JSX.Element;
export default CardButton;
