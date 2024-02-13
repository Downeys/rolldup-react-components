import { MouseEventHandler } from "react";
import Label from "../Label/Label";

interface ActionButtonProps {
    appearance?: 'primary' | 'secondary' | 'tertiary',
    text: string;
    disabled?: boolean;
    additionalStyles?: string;
    onClick?: MouseEventHandler;
    type?: 'submit' | 'button'
}

export const ActionButton = (props: ActionButtonProps) => {
    const appearance = props.appearance ?? 'primary'
    const type = props.type ?? 'button';
    const classList = {
        base: 'p-2 leading-5 font-bold text-lg font-primary border rounded w-full mx-2',
        primary: 'bg-palm text-white border-white',
        secondary: 'bg-transparent border-black dark:border-white',
        tertiary: 'bg transparent border-black dark:border-white text-palm'
    }

    return <button
    className={`${classList.base} ${classList[appearance]} ${props.additionalStyles}`}
    type={type}
    onClick={props.onClick}
    disabled={props.disabled}
    >
        <Label text={props.text} additionalStyles="sm:text-md" />
    </button>
}

export default ActionButton