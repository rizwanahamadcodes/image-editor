import Button, { ButtonIcon } from "@/components/Button/Button";
import { useCanvas } from "@/context/useCanvas";
import { useTextProperties } from "@/context/useTextProperties";
import clsx from "clsx";
import { RiItalic } from "react-icons/ri";

type ItalicToggleProps = {};

const ItalicToggle = (props: ItalicToggleProps) => {
    const { textProperties, setTextProperties } = useTextProperties();
    const { canvas } = useCanvas();

    const handleItalicToggleClick = () => {
        setTextProperties({
            ...textProperties,
            isItalic: !textProperties.isItalic,
        });
        const activeObject = canvas?.getActiveObject();
        if (!activeObject || !activeObject.isType("textbox")) {
            return;
        }
        const activeTextObject = activeObject as fabric.Textbox;

        if (activeTextObject.get("fontStyle") === "italic") {
            activeTextObject.set("fontStyle", "normal");
        } else {
            activeTextObject.set("fontStyle", "italic");
        }
        canvas?.renderAll();
    };

    return (
        <Button
            variant="outline"
            colorScheme="gray-200"
            regular
            size="sm"
            active={textProperties.isItalic}
            onClick={handleItalicToggleClick}>
            <ButtonIcon icon={RiItalic} />
        </Button>
    );
};

export default ItalicToggle;
