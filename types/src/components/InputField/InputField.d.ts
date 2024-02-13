interface EditFieldProps {
    name: string;
    value?: string;
    type?: 'text' | 'date' | 'email';
    onSave: (value: any) => void;
}
export declare const InputField: (props: EditFieldProps) => import("react/jsx-runtime").JSX.Element;
export default InputField;
