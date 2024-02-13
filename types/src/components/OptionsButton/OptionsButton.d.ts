/// <reference types="react" />
import { IconProps } from "../../common/types";
interface IOptionsButton {
    name: string;
    icon?: (props: IconProps) => JSX.Element;
    onClick: () => void;
}
interface IOptionsButtonProps {
    options: IOptionsButton[];
}
export declare const OptionsButton: (props: IOptionsButtonProps) => import("react/jsx-runtime").JSX.Element;
export default OptionsButton;
