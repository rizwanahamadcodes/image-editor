import Button, { ButtonIcon } from "@/components/Button/Button";
import { useCanvas } from "@/context/useCanvas";
import { useTextProperties } from "@/context/useActiveTextObject";
import { fontFamilies } from "@/data/fontFamilies";
import { IoReloadSharp } from "react-icons/io5";

type TextResetterProps = {};

const TextResetter = (props: TextResetterProps) => {
    const {} = props;
    const { canvas } = useCanvas();
    const { textProperties, setTextProperties } = useTextProperties();

    const handleAspectRatioReset = () => {
        const activeObject = canvas?.getActiveObject();
        if (!activeObject || !activeObject.isType("textbox")) {
            return;
        }
        const activeTextObject = activeObject as fabric.Textbox;
        activeTextObject.set({
            fontFamily: fontFamilies[0].value,
            fontSize: 18,
            fill: "#000000",
            fontWeight: "normal",
            fontStyle: "normal",
            textAlign: "left",
            underline: false,
            scaleX: 1,
            scaleY: 1,
            width: 0,
        });
        activeTextObject.setCoords();

        setTextProperties((prevTextProperties) => {
            return {
                ...prevTextProperties,
                fontFamily: fontFamilies[0],
                fontSize: 18,
                color: "#000000",
                isBold: false,
                isItalic: false,
                alignment: "left",
                isUnderlined: false,
            };
        });

        canvas?.renderAll();
    };

    return (
        <Button
            variant="outline"
            size="sm"
            colorScheme="gray-200"
            regular
            onClick={handleAspectRatioReset}>
            <ButtonIcon icon={IoReloadSharp} />
        </Button>
    );
};

export default TextResetter;
