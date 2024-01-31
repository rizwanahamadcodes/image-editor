import Button, { ButtonIcon } from "@/components/Button/Button";
import { useActiveTextboxAndProperties } from "@/context/useActiveTextboxAndProperties";
import { useCanvas } from "@/context/useCanvas";
import { RiItalic } from "react-icons/ri";

type ItalicToggleProps = {};

const ItalicToggle = (props: ItalicToggleProps) => {
    const {
        activeTextbox,
        activeTextboxProperties,
        setActiveTextboxProperties,
    } = useActiveTextboxAndProperties();
    const { canvas } = useCanvas();

    const handleItalicButtonClick = () => {
        const newIsItalic = !activeTextboxProperties.isItalic;

        setActiveTextboxProperties({
            ...activeTextboxProperties,
            isItalic: newIsItalic,
        });

        activeTextbox.set("fontStyle", newIsItalic ? "italic" : "normal");
        canvas?.renderAll();
    };

    return (
        <Button
            variant="outline"
            colorScheme="gray-200"
            regular
            size="sm"
            active={activeTextboxProperties.isItalic}
            onClick={handleItalicButtonClick}>
            <ButtonIcon icon={RiItalic} />
        </Button>
    );
};

export default ItalicToggle;
