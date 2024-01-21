import clsx from "clsx";

type FitToScreenProps = {
    className?: string;
    zoomLevel: number;
    setZoomLevel: React.Dispatch<React.SetStateAction<number>>;
};

const FitToScreen = (props: FitToScreenProps) => {
    const { className, zoomLevel, setZoomLevel } = props;

    return (
        <button
            className={clsx(
                "font-medium border px-0.5 text-gray-700 rounded-0.25 border-gray-200 text-0.75",
                className
            )}>
            Fit to Screen
        </button>
    );
};

export default FitToScreen;
