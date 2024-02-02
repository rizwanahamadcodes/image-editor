import React from "react";

type ZoomSliderProps = {
    zoomLevel: number;
    setZoomLevel: React.Dispatch<React.SetStateAction<number>>;
};

const ZoomSlider = (props: ZoomSliderProps) => {
    const { zoomLevel, setZoomLevel } = props;

    // this functions are defined such that,
    // we scale from 10 to 100 when we reach 50% mark on the rangeSlider
    // and we scale from 100 to 500 when we reach 100% from 51%
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
            return Number((((18 / 10) * range + 10) / 100).toFixed(2));
        } else {
            return Number(((8 * range - 300) / 100).toFixed(2));
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
