import Button, { ButtonIcon } from "@/components/Button/Button";
import { useActiveImageAndProperties } from "@/context/useActiveImageAndProperties";
import { useCanvas } from "@/context/useCanvas";
import { IoReloadSharp } from "react-icons/io5";

type AspectRatioResetterProps = {};

const AspectRatioResetter = (props: AspectRatioResetterProps) => {
    const { activeImage, activeImageProperties, setActiveImageProperties } =
        useActiveImageAndProperties();
    const { canvas } = useCanvas();

    const handleAspectRatioReset = () => {
        const canvasHeight = canvas?.getHeight() || 1;
        const canvasWidth = canvas?.getWidth() || 1;
        const canvasZoomLevel = canvas?.getZoom() || 1;
        const percievedCanvasHeight = canvasHeight / canvasZoomLevel;
        const percievedCanvasWidth = canvasWidth / canvasZoomLevel;

        const imageHeight = activeImage.get("height") || 1;
        const imageWidth = activeImage.get("width") || 1;

        const scaleRatioX = canvasWidth / imageWidth;

        activeImage.set({
            left: 0,
            top: 0,
        });

        if (scaleRatioX * imageHeight <= canvasHeight) {
            activeImage.scaleToWidth(percievedCanvasWidth, true);

            setActiveImageProperties((prevActiveImageProperties) => {
                return {
                    ...prevActiveImageProperties,
                    width: percievedCanvasWidth,
                };
            });
        } else {
            activeImage.scaleToHeight(percievedCanvasHeight, true);
            setActiveImageProperties((prevActiveImageProperties) => {
                return {
                    ...prevActiveImageProperties,
                    height: percievedCanvasHeight,
                };
            });
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
