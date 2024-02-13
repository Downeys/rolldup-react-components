type ContentTuple = [string, string];
interface ToggleProps {
    disabled?: boolean;
    isOn: boolean;
    content: ContentTuple;
    onToggle: () => void;
}
export declare const ToggleWContent: (props: ToggleProps) => import("react/jsx-runtime").JSX.Element;
export default ToggleWContent;
