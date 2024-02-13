import React from "react";

interface HeaderProps {
    text: string;
    size?: 'sm' | 'lg' | 'xl' | '2xl'
    bold?: boolean;
    semibold?: boolean;
    alignment?: 'center';
    additionalStyles?: string;
    inline?: boolean;
}

export const Label = (props: HeaderProps) => {
    const additionalStyles = React.useMemo(() => {
        const bold = props.bold ? 'font-bold' : '';
        const semibold = props.semibold ? 'font-semibold' : '';
        const size = props.size ? `text-${props.size}` : '';
        const inline = props.inline ? 'inline' : '';
        const alignment = props.alignment ? `text-${props.alignment}` : '';
        const additional = props.additionalStyles ?? '';
        return `${bold} ${semibold} ${size} ${inline} ${alignment} ${additional}`
    }, [props])
    return <p className={`font-primary dark:text-white ${additionalStyles}`}>{props.text}</p>
}

export default Label
