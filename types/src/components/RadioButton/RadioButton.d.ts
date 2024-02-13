import { ChangeEventHandler } from "react";
interface RadioButtonProps {
    label: string;
    isSelected?: boolean;
    disabled?: boolean;
    group: string;
    onChange: ChangeEventHandler;
}
export declare const RadioButton: (props: RadioButtonProps) => import("react/jsx-runtime").JSX.Element;
export default RadioButton;
