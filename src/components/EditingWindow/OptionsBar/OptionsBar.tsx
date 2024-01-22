import { FullWidthContainer } from "@/components/Container";
import { useCanvas } from "@/context/useCanvas";
import { useEffect, useState } from "react";
import Select from "react-select";
import TextOptions from "@/components/EditingWindow/OptionsBar/TextOptions/TextOptions";
import { fontFamilies } from "@/data/fontFamilies";

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

    const getObjectOptions = (activeObject: fabric.Object) => {
        switch (activeObject.type) {
            case "textbox":
                {
                    const activeTextObject = activeObject as fabric.Textbox;
                    const fontName = activeTextObject.get("fontFamily");

                    let fontFamily = fontFamilies[0];

                    if (fontName) {
                        const foundFontFamily = fontFamilies.find(
                            (fontFamilyInList) =>
                                fontFamilyInList.value === fontName
                        );

                        if (foundFontFamily) {
                            fontFamily = foundFontFamily;
                        }
                    }

                    const fontSize = activeTextObject.get("fontSize");
                    const color = activeTextObject.get("fill");
                    const isBold =
                        activeTextObject.get("fontWeight") === "bold";
                    const isItalic =
                        activeTextObject.get("fontStyle") === "italic";
                    return (
                        <TextOptions
                            initialFontFamily={fontFamily}
                            initialFontSize={fontSize || 12}
                            color={color}
                            isBold={isBold}
                            isItalic={isItalic}
                        />
                    );
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
            <FullWidthContainer className="flex flex-col justify-center items-end h-full">
                <div className="font-medium text-gray-500">
                    {activeObject ? getObjectOptions(activeObject) : <></>}
                </div>
            </FullWidthContainer>
        </div>
    );
};
