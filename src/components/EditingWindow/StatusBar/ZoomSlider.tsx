import React from "react";

type ZoomSliderProps = {
    zoomLevel: number;
    setZoomLevel: React.Dispatch<React.SetStateAction<number>>;
};

const ZoomSlider = (props: ZoomSliderProps) => {
    const { zoomLevel, setZoomLevel } = props;
    const getRangeFromZoom = (zoom: number) => {
        const scaledZoom = zoom * 100;

        if (scaledZoom <= 100) {
            return (5 / 9) * scaledZoom - 50 / 9;
        } else {
            return (1 / 8) * scaledZoom + 75 / 2;
        }
    };

    const getZoomFromRange = (range: number) => {
        if (range <= 50) {
            return ((18 / 10) * range + 10) / 100;
        } else {
            return (8 * range - 300) / 100;
        }
    };

    return (
        <input
            onChange={(e) => {
                setZoomLevel(getZoomFromRange(parseInt(e.target.value)));
            }}
            type="range"
            className="zoom-slider"
            min={0}
            max={100}
            value={getRangeFromZoom(zoomLevel)}
        />
    );
};

export default ZoomSlider;
