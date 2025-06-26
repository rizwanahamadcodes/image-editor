import { FullWidthContainer } from "@/components/Container";
import ShapeProperties from "@/components/EditingWindow/PropertiesBar/ShapeProperties/ShapeProperties";
import TextProperties from "@/components/EditingWindow/PropertiesBar/TextProperties/TextProperties";
import { useCanvas } from "@/context/useCanvas";
import { useEffect, useState } from "react";
import ImageProperties from "./ImageProperties/ImageProperties";
import SaveAndExport from "./SaveAndExport";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { PropertiesBarMode } from "@/pages/projects/[projectId]/edit";
import { TbDotsVertical, TbMenu2 } from "react-icons/tb";
import { RiListUnordered } from "react-icons/ri";

type PropertiesBarProps = {
    showOptions: PropertiesBarMode;
    setShowOptions: React.Dispatch<React.SetStateAction<PropertiesBarMode>>;
};

export const PropertiesBar = (props: PropertiesBarProps) => {
    const { showOptions, setShowOptions } = props;
    const { canvas } = useCanvas();
    const [activeObject, setActiveObject] = useState<fabric.Object | null>(
        null
    );

    useEffect(() => {
        if (canvas) {
            canvas.on("selection:created", () => {
                const activeObject = canvas.getActiveObject();
                setActiveObject(activeObject);
            });
            canvas.on("selection:updated", () => {
                const activeObject = canvas.getActiveObject();
                setActiveObject(() => activeObject);
            });

            canvas.on("selection:cleared", () => {
                const activeObject = canvas.getActiveObject();
                setActiveObject(null);
            });
        }
    }, [canvas]);

    const getObjectProperties = (activeObject: fabric.Object) => {
        switch (activeObject.type) {
            case "textbox":
                {
                    const activeTextbox = activeObject as fabric.Textbox;
                    return (
                        <>
                            <TextProperties activeTextbox={activeTextbox} />
                        </>
                    );
                }
                break;
            case "image":
                const activeImage = activeObject as fabric.Image;
                return <ImageProperties activeImage={activeImage} />;
                break;
            case "rect":
            case "ellipse":
                const activePolygon = activeObject as fabric.Polygon;
                return <ShapeProperties activePolygon={activePolygon} />;
                break;
            default:
                // Toggle between 'menu' and 'options' if the same tool is clicked
                return <p></p>;
        }

        return;
    };
    const handleToolbarHamburgerClick = () => {
        setShowOptions((prev) => {
            if (prev === "hidden") return "menu";
            if (prev === "menu") return "options";
            if (prev === "options") return "hidden";

            return "hidden";
        });
    };

    return (
        <div className="h-4 flex gap-0.5 justify-between">
            <div className="rounded-0.875 p-0.375 h-full w-4 shrink-0 bg-white">
                <button
                    className="h-3.25 text-gray-500 items-center flex justify-center rounded-0.5 flex-col w-full hover:text-gray-800 hover:bg-gray-100"
                    onClick={handleToolbarHamburgerClick}>
                    {showOptions === "hidden" && (
                        <TbDotsVertical className="text-1.5 text-gray-500 hover:text-gray-700" />
                    )}
                    {showOptions === "menu" && (
                        <RiListUnordered className="text-1.5 text-gray-500 hover:text-gray-700" />
                    )}
                    {showOptions === "options" && (
                        <IoChevronBackOutline className="text-1.5 text-gray-500 hover:text-gray-700" />
                    )}
                </button>
            </div>
            {activeObject ? (
                <div className="flex grow justify-center rounded-0.875 shrink-0 bg-white items-center">
                    {getObjectProperties(activeObject)}
                </div>
            ) : null}
            <div className="rounded-0.875 p-0.375 h-full w-4 shrink-0 bg-white">
                <button className="h-3.25 text-gray-500 items-center flex justify-center rounded-0.5 flex-col w-full hover:text-gray-800 hover:bg-gray-100">
                    <SaveAndExport />
                </button>
            </div>
        </div>
    );
};
