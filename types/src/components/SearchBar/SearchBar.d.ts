import React from 'react';
interface SearchBarProps {
    name?: string;
    value?: string;
    icon?: React.FC;
    iconPosition?: 'left' | 'right';
    border?: boolean;
    width?: string;
    height?: string;
    additionalStyles?: string;
    onFocus?: () => void;
    onBlur?: () => void;
    onChange?: (searchStr: string) => void;
    onSubmit?: (searchStr: any) => void;
}
export declare const SearchBar: (props: SearchBarProps) => import("react/jsx-runtime").JSX.Element;
export default SearchBar;
