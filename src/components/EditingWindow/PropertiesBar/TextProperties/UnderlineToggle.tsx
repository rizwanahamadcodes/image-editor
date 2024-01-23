import { useCanvas } from "@/context/useCanvas";
import { useTextProperties } from "@/context/useTextProperties";
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
        <button
            onClick={handleUnderlineToggleClick}
            className={clsx(
                "border border-gray-200 rounded-0.25 px-0.25",
                textProperties.isUnderlined
                    ? "bg-gray-100 border-gray-300 text-gray-600"
                    : ""
            )}>
            <RiUnderline className="text-1.5" />
        </button>
    );
};

export default UnderlineToggle;
