import React from "react"
import Label from "../Label/Label";
import RatingStarIcon from "../icons/RatingStarIcon";

export interface RatingProps {
    rating: number;
    disableClick?: boolean;
    detailed?: boolean;
    onSelect?: (selection: any) => void;
}

export interface RatingState {
    stars: string[];
    selectedStars: string[];
    rating: number;
}

export const Rating = (props: RatingProps) => {
    const [state, setState] = React.useState<RatingState>({
        stars: [],
        selectedStars: [],
        rating: props.rating
    })

    React.useEffect(() => {
        const emptyStars: string[] = [];
        const filledStars: string[] = [];
        for(let i = 0; i < state.rating; i++){
            filledStars.push("star");
        }
        for(let j = 0; j < 5 - state.rating; j++){
            emptyStars.push("star");
        }
        setState({ ...state, selectedStars: filledStars, stars: emptyStars })
    }, [state.rating])

    const handleClick = (selected: boolean, ix: number) => {
        if (!props.disableClick) {
            let newRating;
            if(selected) newRating = (ix + 1)
            else newRating = (ix + state.selectedStars.length + 1)
            setState({ ...state, rating: newRating })
            props.onSelect?.(newRating)
        }
    }
    
    return (
        <span className="flex">
            {state.selectedStars.map((star, ix) => <div key={'filledStar' + ix} onClick={() => handleClick(true, ix)}><RatingStarIcon selected={true} /></div>)}
            {state.stars.map((star, ix) => <div key={'Star' + ix} onClick={() => handleClick(false, ix)}><RatingStarIcon selected={false} /></div>)}
            &nbsp;
            {props.detailed && <Label text={` - ${state.rating}/5`} bold />}
        </span>
    )
}

export default Rating