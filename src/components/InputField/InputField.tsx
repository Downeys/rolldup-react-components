import React from "react"
import ActionButton from "../ActionButton/ActionButton";

interface EditFieldProps {
    name: string;
    value?: string;
    type?: 'text' | 'date' | 'email';
    onSave: (value: any) => void;
}

export const InputField = (props: EditFieldProps) => {
    const type = props.type ?? 'text';
    const [value, setValue] = React.useState(props.value)

    const handleClick = () => {
        props.onSave({ [props.name]: value } || {})
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <div className="flex flex-row h-12 w-full justify-between dark:bg-slate-800">
            <input className="border-none outline-none focus:outline-none leading-5 font-primary dark:bg-slate-800 dark:text-white w-full text-right"
                type={type}
                placeholder={props.type !== 'date' ? props.name : ''}
                value={value}
                onChange={handleChange} />
            <ActionButton appearance={'primary'} text={'Save'} additionalStyles="m-1 w-16 mr-4" onClick={handleClick}/>
        </div>
    )
}

export default InputField
