import { IconProps } from "../../common/types";
import Label from "../Label/Label";
import PlusIcon from "../icons/PlusIcon";

interface IFABButtonProps {
    text: string;
    icon?: (props: IconProps) => JSX.Element;
    onFabClick: Function;
}

export const FAB = (props: IFABButtonProps) => {
    const Icon = props.icon ?? PlusIcon

    return (
        <div className="bg-transparent flex flex-row justify-end items-center mr-8 mb-3 z-20" onClick={() => props.onFabClick(props.text)}>
            <Label bold size='lg' text={props.text} additionalStyles='dark:text-black' />
            <div className="h-9 w-9 rounded-full bg-darkGreen ml-4 flex justify-center items-center text-dollar"><Icon /></div>
        </div>
    )
}

export default FAB