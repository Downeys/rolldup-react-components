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
export declare const Rating: (props: RatingProps) => import("react/jsx-runtime").JSX.Element;
export default Rating;
