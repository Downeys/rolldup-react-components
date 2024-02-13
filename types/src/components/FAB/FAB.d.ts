/// <reference types="react" />
import { IconProps } from "../../common/types";
interface IFABButtonProps {
    text: string;
    icon?: (props: IconProps) => JSX.Element;
    onFabClick: Function;
}
export declare const FAB: (props: IFABButtonProps) => import("react/jsx-runtime").JSX.Element;
export default FAB;
