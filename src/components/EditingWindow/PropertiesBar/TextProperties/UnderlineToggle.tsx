import Button, { ButtonIcon } from "@/components/Button/Button";
import { useCanvas } from "@/context/useCanvas";
import { useTextProperties } from "@/context/useActiveTextObject";
import clsx from "clsx";
import { RiUnderline } from "react-icons/ri";

type UnderlineToggleProps = {};

const UnderlineToggle = (props: UnderlineToggleProps) => {
    const { textProperties, setTextProperties } = useTextProperties();
    const { canvas } = useCanvas();

    const handleUnderlineToggleClick = () => {
        setTextProperties({
            ...textProperties,
            isUnderlined: !textProperties.isUnderlined,
        });
        const activeObject = canvas?.getActiveObject();
        if (!activeObject || !activeObject.isType("textbox")) {
            return;
        }
        const activeTextObject = activeObject as fabric.Textbox;

        if (activeTextObject.get("underline") === true) {
            activeTextObject.set("underline", false);
        } else {
            activeTextObject.set("underline", true);
        }
        canvas?.renderAll();
    };

    return (
        <Button
            variant="outline"
            colorScheme="gray-200"
            regular
            size="sm"
            active={textProperties.isUnderlined}
            onClick={handleUnderlineToggleClick}>
            <ButtonIcon icon={RiUnderline} />
        </Button>
    );
};

export default UnderlineToggle;
