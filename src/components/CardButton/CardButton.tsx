import { MouseEventHandler } from "react"
import { IconProps } from "../../common/types";
import ShareIcon from "../icons/ShareIcon";

interface CardButtonProps {
    icon?: (props: IconProps) => JSX.Element;
    clickHandler: MouseEventHandler;
    styling?: string;
    selected?: boolean;
}

export const CardButton = (props: CardButtonProps) => {
    const Icon = props.icon ?? ShareIcon
    return (
        <a type='button' className={props.styling || 'mr-4'} onClick={props.clickHandler}><Icon selected={props.selected} /></a>
    )
}

export default CardButton