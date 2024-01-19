import { useEffect, useState } from "react";

type StatusBarProps = {
    zoomLevel: number;
    setZoomLevel: React.Dispatch<React.SetStateAction<number>>;
};

const StatusBar = (props: StatusBarProps) => {
    const { zoomLevel, setZoomLevel } = props;
    const [range, setRange] = useState(50);

    const getZoomFromRange = (x: number) => {
        return 0.062 * x * x - 1.3 * x + 10;
    };

    useEffect(() => {
        console.log(getZoomFromRange(range));

        setZoomLevel(getZoomFromRange(range) / 100);
    }, [range, setZoomLevel]);

    return (
        <div>
            <input
                onChange={(e) => {
                    setRange(parseInt(e.target.value));
                }}
                type="range"
                className="border-none outline-none accent-gray-700 h-0.25 bg-gray-100"
                min={0}
                max={100}
                value={range}
            />
            <button
                onClick={() => {
                    setZoomLevel((prevZoom) => prevZoom - 0.1);
                }}>
                Zoom out
            </button>{" "}
            <button
                onClick={() => {
                    setZoomLevel(1);
                }}>
                Snap to 100
            </button>
            <button
                onClick={() => {
                    setZoomLevel((prevZoom) => prevZoom + 0.1);
                }}>
                Zoom in
            </button>
        </div>
    );
};

export default StatusBar;
