import { MouseEventHandler } from "react";
interface ActionButtonProps {
    appearance?: 'primary' | 'secondary' | 'tertiary';
    text: string;
    disabled?: boolean;
    additionalStyles?: string;
    onClick?: MouseEventHandler;
    type?: 'submit' | 'button';
}
export declare const ActionButton: (props: ActionButtonProps) => import("react/jsx-runtime").JSX.Element;
export default ActionButton;
