import React from "react";
import Label from "../Label/Label";
import SubHeading from "../SubHeading/SubHeading";
import DownChevronIcon from "../icons/DownChevronIcon";
import UpChevronIcon from "../icons/UpChevronIcon";

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

export const Dropdown = (props: DropdownProps) => {
    const [state, setState] = React.useState({
        expanded: false,
        selection: props.selection ?? '',
        hasFocus: !!props.hasFocus
    })
    const headerClass = React.useMemo(() => state.expanded ? " bg-grey w-full pl-4 pr-3 h-12 border border-grey rounded flex flex-row items-center justify-between" : "w-full pl-4 pr-3 h-12 border border-grey rounded flex flex-row items-center justify-between", [state.expanded])

    const handleDropdownClick = () => {
        setState({ ...state, expanded: !state.expanded })
        props.takeFocus?.(props.title)
    }

    const handleMenuItemClick = (name: string) => {
        setState({ ...state, selection: name, expanded: !state.expanded })
        props.onSelect(name)
    }
    
    return (
        <div className="w-full dark:bg-slate-800">
            <div onClick={handleDropdownClick}
            className={headerClass}>
                <SubHeading text={state.selection || props.title} additionalStyles={state.expanded ? "dark:text-black" : ""}/>
                {state.expanded ? <UpChevronIcon styling="h-6 w-6 border" /> : <DownChevronIcon styling="h-6 w-6 border" />}
            </div>
            {state.expanded && <div className="border border-grey sticky z-10 bg-white dark:bg-slate-800">
                {props.menuItems.map(item => item.name !== state.selection && (<div key={`menuItem-${item.name}`} onClick={() => handleMenuItemClick(item.name)}>
                    <Label text={item.name} size='lg' additionalStyles="w-full pl-4 py-1" />
                </div>))}
            </div>}
        </div>
    )
}

export default Dropdown