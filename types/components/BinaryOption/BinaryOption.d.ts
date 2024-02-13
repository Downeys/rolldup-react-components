interface BinaryOptionProps {
    name: string;
    option1: string;
    option2: string;
    appearance?: 'primary' | 'secondary' | 'tertiary';
    selection?: string;
    type?: 'radio' | 'button';
    onSave: (selection: any) => void;
    onChange?: (selection: string) => void;
}
export declare const BinaryOption: (props: BinaryOptionProps) => import("react/jsx-runtime").JSX.Element;
export default BinaryOption;
