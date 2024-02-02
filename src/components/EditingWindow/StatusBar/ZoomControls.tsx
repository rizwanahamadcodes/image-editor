import Button, { ButtonIcon } from "@/components/Button/Button";
import { useCanvas } from "@/context/useCanvas";

import React from "react";
import { HiMagnifyingGlassMinus, HiMagnifyingGlassPlus } from "react-icons/hi2";
import { MdOutlineFitScreen } from "react-icons/md";
type ZoomControlsProps = {
    zoomLevel: number;
    setZoomLevel: React.Dispatch<React.SetStateAction<number>>;
    canvasParentRef: React.MutableRefObject<HTMLElement | null>;
};

const ZoomControls = (props: ZoomControlsProps) => {
    const { zoomLevel, setZoomLevel, canvasParentRef } = props;
    const { canvas } = useCanvas();

    const changeZoomBy = (delta: number) => {
        const scaledUpZoom = zoomLevel * 100;
        const diffFromLowerStep = Math.floor(scaledUpZoom % delta);
        let newZoom;
        if (diffFromLowerStep === 0) {
            newZoom = scaledUpZoom + delta;
        } else {
            newZoom = scaledUpZoom + (-(diffFromLowerStep - delta) % delta);
        }

        setZoomLevel(
            Math.min(Math.max(Number((newZoom / 100).toFixed(2)), 0.1), 5)
        );
    };

    const fitToScreen = () => {
        try {
            if (!canvas || !canvasParentRef.current) {
                return;
            }

            const originalCanvasHeight =
                canvas?.getHeight() / canvas?.getZoom();
            const originalCanvasWidth = canvas?.getWidth() / canvas?.getZoom();

            if (originalCanvasHeight === 0 || originalCanvasWidth === 0) {
                console.error(
                    "Division by zero error. Zoom calculation aborted."
                );
                return;
            }

            const padding = 16;
            const parentHeight = canvasParentRef.current?.clientHeight;
            const parentWidth = canvasParentRef.current?.clientWidth;

            const yZoom = (parentHeight - 2 * padding) / originalCanvasHeight;
            const xZoom = (parentWidth - 2 * padding) / originalCanvasWidth;

            if (originalCanvasWidth * yZoom > parentWidth) {
                setZoomLevel(Number(xZoom.toFixed(2)));
            } else {
                setZoomLevel(Number(yZoom.toFixed(2)));
            }
        } catch (error) {
            console.error("An error occurred in fitToScreen:", error);
        }
    };

    return (
        <div className="flex gap-0.5 flex-col sm:flex-row-reverse">
            <div className="flex gap-0.25  flex-col sm:flex-row">
                <Button
                    onClick={() => {
                        setZoomLevel(1);
                    }}
                    colorScheme="gray-200"
                    variant="outline"
                    regular
                    className="!text-0.5 !font-bold"
                    size="sm">
                    100%
                </Button>
                <Button
                    onClick={fitToScreen}
                    colorScheme="gray-200"
                    variant="outline"
                    regular
                    size="sm">
                    <ButtonIcon icon={MdOutlineFitScreen} />
                </Button>
            </div>
            <div className="flex gap-0.25  flex-col sm:flex-row">
                <Button
                    onClick={() => {
                        changeZoomBy(-10);
                    }}
                    colorScheme="gray-200"
                    variant="outline"
                    regular
                    size="sm">
                    <ButtonIcon icon={HiMagnifyingGlassMinus} />
                </Button>
                <Button
                    onClick={() => {
                        changeZoomBy(10);
                    }}
                    colorScheme="gray-200"
                    variant="outline"
                    regular
                    size="sm">
                    <ButtonIcon icon={HiMagnifyingGlassPlus} />
                </Button>
            </div>
        </div>
    );
};

export default ZoomControls;
