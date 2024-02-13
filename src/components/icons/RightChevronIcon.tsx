import { IconProps } from "../../common/types"

export const RightChevronIcon = (props: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={window.matchMedia('(prefers-color-scheme: dark)').matches ? "white" : "currentColor"}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
</svg>

export default RightChevronIcon
