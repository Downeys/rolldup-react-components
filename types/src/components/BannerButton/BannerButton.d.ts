import { MouseEventHandler } from "react";
import { IconProps } from "../../common/types";
interface BannerButtonProps {
    icon?: (props: IconProps) => JSX.Element;
    text: string;
    clickHandler: MouseEventHandler;
}
export declare const BannerButton: (props: BannerButtonProps) => import("react/jsx-runtime").JSX.Element;
export default BannerButton;
