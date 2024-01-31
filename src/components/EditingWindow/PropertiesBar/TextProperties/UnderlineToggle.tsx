import Button, { ButtonIcon } from "@/components/Button/Button";
import { useActiveTextboxAndProperties } from "@/context/useActiveTextboxAndProperties";
import { useCanvas } from "@/context/useCanvas";
import { RiUnderline } from "react-icons/ri";

type UnderlineToggleProps = {};

const UnderlineToggle = (props: UnderlineToggleProps) => {
    const {
        activeTextbox,
        activeTextboxProperties,
        setActiveTextboxProperties,
    } = useActiveTextboxAndProperties();
    const { canvas } = useCanvas();

    const handleUnderlineToggleClick = () => {
        const newIsUnderlined = !activeTextboxProperties.isUnderlined;

        setActiveTextboxProperties({
            ...activeTextboxProperties,
            isUnderlined: newIsUnderlined,
        });

        activeTextbox.set("underline", newIsUnderlined);
        canvas?.renderAll();
    };
    return (
        <Button
            variant="outline"
            colorScheme="gray-200"
            regular
            size="sm"
            active={activeTextboxProperties.isUnderlined}
            onClick={handleUnderlineToggleClick}>
            <ButtonIcon icon={RiUnderline} />
        </Button>
    );
};

export default UnderlineToggle;
