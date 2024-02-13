import React from "react"

interface ToggleProps {
    disabled?: boolean;
    isOn: boolean;
    onToggle: () => void;
}

export const Toggle = (props: ToggleProps) => {
    const [isOn, setIsOn] = React.useState(props.isOn || false)
    const [outerDivStyles, innerStyles] = React.useMemo(() => {
        const obg = isOn ? 'bg-dollar justify-end' : 'bg-grey'
        const ibg = isOn ? 'bg-texasGreen' : 'bg-black dark:bg-white'
        return [`h-3 w-9 rounded-full flex items-center ${obg}`, `h-5 w-5 rounded-full ${ibg}`]
    }, [isOn])

    const handleClick = React.useCallback(() => {
        if (!props.disabled) setIsOn(!isOn)
        props.onToggle()
    }, [isOn])

    return (
        <div className={outerDivStyles} onClick={handleClick}>
            <div className={innerStyles} />
        </div>
    )
}

export default Toggle
