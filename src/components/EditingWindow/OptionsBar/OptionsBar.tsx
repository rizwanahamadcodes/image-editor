import { FullWidthContainer } from "@/components/Container";
import { useCanvas } from "@/context/useCanvas";
import { useEffect, useState } from "react";
import Select from "react-select";
import TextOptions from "@/components/EditingWindow/OptionsBar/TextOptions/TextOptions";

type OptionsBarProps = {};
export const OptionsBar = (props: OptionsBarProps) => {
    const {} = props;
    const { canvas, setCanvas } = useCanvas();
    const [activeObject, setActiveObject] = useState<fabric.Object | null>(
        null
    );

    useEffect(() => {
        if (canvas) {
            canvas.on("selection:created", () => {
                const activeObject = canvas.getActiveObject();
                setActiveObject(activeObject);
            });
            canvas.on("selection:cleared", () => {
                const activeObject = canvas.getActiveObject();
                setActiveObject(null);
            });
        }
    }, [canvas]);

    const getObjectOptions = (activeObject: fabric.Object) => {
        switch (activeObject.type) {
            case "textbox":
                {
                    return <TextOptions activeObject={activeObject} />;
                }
                break;
            case "image":
                return <p>Options for image</p>;
                break;
            default:
                return <p>No options</p>;
        }

        return;
    };

    return (
        <div className="border-b border-b-gray-100 h-4 shrink-0">
            <FullWidthContainer className="flex flex-col justify-center items-start h-full">
                <p className="font-medium text-gray-500">
                    {activeObject ? getObjectOptions(activeObject) : <></>}
                </p>
            </FullWidthContainer>
        </div>
    );
};
