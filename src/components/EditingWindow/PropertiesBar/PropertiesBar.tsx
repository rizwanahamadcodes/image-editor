import { FullWidthContainer } from "@/components/Container";
import TextProperties from "@/components/EditingWindow/PropertiesBar/TextProperties/TextProperties";
import { useCanvas } from "@/context/useCanvas";
import { useEffect, useState } from "react";

type PropertiesBarProps = {};
export const PropertiesBar = (props: PropertiesBarProps) => {
    const {} = props;
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
                console.log("something got modified");
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
                    const activeTextObject = activeObject as fabric.Textbox;
                    return (
                        <TextProperties activeTextObject={activeTextObject} />
                    );
                }
                break;
            case "image":
                return <p>Properties for image</p>;
                break;
            default:
                return <p>No properties</p>;
        }

        return;
    };

    return (
        <div className="border-b border-b-gray-100 h-4 shrink-0">
            <FullWidthContainer className="flex flex-col justify-center items-end h-full">
                <div className="font-medium text-gray-500">
                    {activeObject ? getObjectProperties(activeObject) : <></>}
                </div>
            </FullWidthContainer>
        </div>
    );
};
