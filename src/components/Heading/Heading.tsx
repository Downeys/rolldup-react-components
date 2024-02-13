import React from "react";

interface HeaderProps {
    text: string;
    additionalStyles?: string;
    size?: 'lg' | 'xl' | '2xl'
}

export const Heading = (props: HeaderProps) => {
    const size = props.size ?? 'lg';
    const additionalStyles = props.additionalStyles ?? '';
    const fontSize = React.useMemo(() => ({
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl' 
    }), [])
    return <p className={`dark:text-white font-primary font-bold leading-5 ${fontSize[size]} ${additionalStyles}`}>{props.text}</p>
}

export default Heading