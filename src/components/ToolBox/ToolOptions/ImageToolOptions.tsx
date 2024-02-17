import { useActiveProject } from "@/context/useActiveProject";
import { useCanvas } from "@/context/useCanvas";
import Image from "next/image";
import { fabric } from "fabric";

type ImageOptionsProps = {};

const ImageToolOptions = (props: ImageOptionsProps) => {
    const {} = props;
    const { activeProject, setActiveProject } = useActiveProject();
    const { canvas } = useCanvas();

    const addImageToCanvas = (imageUrl: string) => {
        fabric.Image.fromURL(imageUrl, (img) => {
            const canvasHeight = canvas?.getHeight() || 1;
            const canvasWidth = canvas?.getWidth() || 1;
            const canvasZoomLevel = canvas?.getZoom() || 1;
            const percievedCanvasHeight = canvasHeight / canvasZoomLevel;
            const percievedCanvasWidth = canvasWidth / canvasZoomLevel;

            const imageHeight = img.get("height") || 1;
            const imageWidth = img.get("width") || 1;

            const scaleRatioX = canvasWidth / imageWidth;

            if (scaleRatioX * imageHeight <= canvasHeight) {
                img.scaleToWidth(percievedCanvasWidth, true);
            } else {
                img.scaleToHeight(percievedCanvasHeight, true);
            }
            img.set({
                left: 0,
                top: 0,
            });
            // img.on("scaling", function (e) {
            //     console.log(img.width);
            //     console.log(img.getScaledWidth());
            // });
            canvas?.add(img);
        });
    };

    return (
        <div className="relative flex-col flex gap-0.5 p-1">
            {activeProject.images?.map((imageUrl, index) => (
                <div key={index} className="relative cursor-pointer">
                    <Image
                        onClick={() => {
                            addImageToCanvas(imageUrl);
                        }}
                        className="rounded-1"
                        src={imageUrl}
                        width={300}
                        height={300}
                        alt={imageUrl}
                    />
                </div>
            ))}
            \
        </div>
    );
};

export default ImageToolOptions;
