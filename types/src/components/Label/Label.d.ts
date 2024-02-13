interface HeaderProps {
    text: string;
    size?: 'sm' | 'lg' | 'xl' | '2xl';
    bold?: boolean;
    semibold?: boolean;
    alignment?: 'center';
    additionalStyles?: string;
    inline?: boolean;
}
export declare const Label: (props: HeaderProps) => import("react/jsx-runtime").JSX.Element;
export default Label;
