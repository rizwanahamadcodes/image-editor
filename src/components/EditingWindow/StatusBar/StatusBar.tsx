import { useEffect, useState } from "react";

type StatusBarProps = {
    zoomLevel: number;
    setZoomLevel: React.Dispatch<React.SetStateAction<number>>;
};

const StatusBar = (props: StatusBarProps) => {
    const { zoomLevel, setZoomLevel } = props;

    const getZoomFromRange = (range: number) => {
        if (range <= 50) {
            return ((18 / 10) * range + 10) / 100;
        } else {
            return (8 * range - 300) / 100;
        }
    };
    const getRangeFromZoom = (zoom: number) => {
        const scaledZoom = zoom * 100;

        if (scaledZoom <= 100) {
            return (556 / 1000) * scaledZoom - 556 / 1000;
        } else {
            return (125 / 1000) * scaledZoom + 375 / 10;
        }
    };

    return (
        <div>
            <input
                onChange={(e) => {
                    setZoomLevel(getZoomFromRange(parseInt(e.target.value)));
                }}
                type="range"
                className="border-none outline-none accent-gray-700 h-0.25 bg-gray-100"
                min={0}
                max={100}
                value={getRangeFromZoom(zoomLevel)}
            />
            {zoomLevel * 100}
            <button
                onClick={() => {
                    setZoomLevel((prevZoom) => prevZoom - 0.1);
                }}>
                Zoom out
            </button>
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
