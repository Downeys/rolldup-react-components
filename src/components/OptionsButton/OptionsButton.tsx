import React from "react";
import VerticalEllipsisIcon from "../icons/VerticalEllipsisIcon";
import Label from "../Label/Label";
import { IconProps } from "../../common/types";
import AlertIcon from "../icons/AlertIcon";

interface IOptionsButton {
    name: string;
    icon?: (props: IconProps) => JSX.Element;
    onClick: () => void;
}

interface IOptionsButtonProps {
    options: IOptionsButton[];
}

export const OptionsButton = (props: IOptionsButtonProps) => {
    const [showMenu, setShowMenu] = React.useState(false);

    const handleOptionsClick = () => {
        setShowMenu(!showMenu)
    }

    const handleItemSelection = (clickHandler: () => void) => {
        setShowMenu(false);
        clickHandler();
    }

    return (
        <div className="h-6 w-6 mr-4">
            <VerticalEllipsisIcon onClick={handleOptionsClick} />
            {showMenu && 
                <div className="flex flex-col items-end dark:bg-slate-800">
                    {props.options.map((optionButton) => {
                        const Icon = optionButton.icon ?? AlertIcon;
                        return <button key={"optionButton-" + optionButton.name}
                                    onClick={() => handleItemSelection(optionButton.onClick)}
                                    className="h-10 w-28 flex items-center bg-white z-10 dark:bg-slate-800">
                                        <Icon />
                                        <Label semibold text={optionButton.name}/>
                                </button>
                    })}
                </div>
            }
        </div>
    )
}

export default OptionsButton;
