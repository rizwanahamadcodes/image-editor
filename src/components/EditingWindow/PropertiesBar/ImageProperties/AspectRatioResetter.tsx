import Button, { ButtonIcon } from "@/components/Button/Button";
import { useCanvas } from "@/context/useCanvas";
import { IoReloadSharp } from "react-icons/io5";

type AspectRatioResetterProps = { activeImageObject: fabric.Object };

const AspectRatioResetter = (props: AspectRatioResetterProps) => {
    const { activeImageObject } = props;
    const { canvas } = useCanvas();

    const handleAspectRatioReset = () => {
        const canvasHeight = canvas?.getHeight() || 1;
        const canvasWidth = canvas?.getWidth() || 1;
        const canvasZoomLevel = canvas?.getZoom() || 1;
        const percievedCanvasHeight = canvasHeight / canvasZoomLevel;
        const percievedCanvasWidth = canvasWidth / canvasZoomLevel;

        const imageHeight = activeImageObject.get("height") || 1;
        const imageWidth = activeImageObject.get("width") || 1;

        const scaleRatioX = canvasWidth / imageWidth;

        activeImageObject.set({
            left: 0,
            top: 0,
        });

        if (scaleRatioX * imageHeight <= canvasHeight) {
            activeImageObject.scaleToWidth(percievedCanvasWidth, true);
        } else {
            activeImageObject.scaleToHeight(percievedCanvasHeight, true);
        }

        canvas?.renderAll();
    };

    return (
        <Button onClick={handleAspectRatioReset}>
            <ButtonIcon icon={IoReloadSharp} />
        </Button>
    );
};

export default AspectRatioResetter;
