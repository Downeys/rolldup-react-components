import { MouseEventHandler } from "react"
import Heading from "../Heading/Heading";
import RightChevronIcon from "../icons/RightChevronIcon";
import RatingStarIcon from "../icons/RatingStarIcon";
import { IconProps } from "../../common/types";

interface BannerButtonProps {
    icon?: (props: IconProps) => JSX.Element;
    text: string;
    clickHandler: MouseEventHandler;
}

export const BannerButton = (props: BannerButtonProps) => {
    const Icon = props.icon ?? RatingStarIcon;
    return (
        <a type='button' className="mt-4 flex flex-row bg-white dark:bg-slate-800 h-14 w-full justify-between items-center" onClick={props.clickHandler}>
            <div className="flex items-center">
                <Icon selected={true} styling='h-9 w-9 ml-5'/>
                <Heading text={props.text} additionalStyles='ml-10'/>
            </div>
            <div className="mr-4">
                <RightChevronIcon />
            </div>
        </a>
    )
}

export default BannerButton

// border classes border-t border-b border-solid border-grey
