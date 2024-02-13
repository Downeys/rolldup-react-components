import { ChangeEventHandler } from "react";
import Label from "../Label/Label";

interface RadioButtonProps {
    label: string;
    isSelected?: boolean;
    disabled?: boolean;
    group: string;
    onChange: ChangeEventHandler
}

export const RadioButton = (props: RadioButtonProps) => {
    return (
        <div className="flex flex-row items-center">
            <input className='focus:ring-black text-dollar border-black border-2 h-5 w-5'
                disabled={props.disabled}
                type="radio"
                id={props.label}
                name={props.group}
                onChange={props.onChange}
                checked={props.isSelected} />
            <Label text={props.label} additionalStyles='mx-4 whitespace-nowrap' />
        </div>
    )
}

export default RadioButton