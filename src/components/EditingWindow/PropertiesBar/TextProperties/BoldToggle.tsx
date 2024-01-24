import Button, { ButtonIcon } from "@/components/Button/Button";
import { useCanvas } from "@/context/useCanvas";
import { useTextProperties } from "@/context/useTextProperties";
import clsx from "clsx";
import { BiBold } from "react-icons/bi";
import { RiBold } from "react-icons/ri";

type BoldToggleProps = {};

const BoldToggle = (props: BoldToggleProps) => {
    const { textProperties, setTextProperties } = useTextProperties();
    const { canvas } = useCanvas();

    const handleBoldToggleClick = () => {
        setTextProperties({
            ...textProperties,
            isBold: !textProperties.isBold,
        });
        const activeObject = canvas?.getActiveObject();
        if (!activeObject || !activeObject.isType("textbox")) {
            return;
        }
        const activeTextObject = activeObject as fabric.Textbox;
        if (activeTextObject.get("fontWeight") === "bold") {
            activeTextObject.set("fontWeight", "normal");
        } else {
            activeTextObject.set("fontWeight", "bold");
        }
        canvas?.renderAll();
    };

    return (
        <Button
            variant="outline"
            colorScheme="gray-200"
            regular
            active={textProperties.isBold}
            onClick={handleBoldToggleClick}>
            <ButtonIcon icon={RiBold} />
        </Button>
    );
};

export default BoldToggle;
