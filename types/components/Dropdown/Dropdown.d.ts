interface MenuItem {
    name: string;
}
interface DropdownProps {
    title: string;
    selection?: string;
    menuItems: MenuItem[];
    hasFocus?: boolean;
    takeFocus?: (formItem: string) => void;
    onSelect: (selection: any) => void;
}
export declare const Dropdown: (props: DropdownProps) => import("react/jsx-runtime").JSX.Element;
export default Dropdown;
