import Button, { ButtonIcon } from "@/components/Button/Button";
import { useActiveTextboxAndProperties } from "@/context/useActiveTextboxAndProperties";
import { useCanvas } from "@/context/useCanvas";
import { RiBold } from "react-icons/ri";

type BoldToggleProps = {};

const BoldToggle = (props: BoldToggleProps) => {
    const {
        activeTextbox,
        activeTextboxProperties,
        setActiveTextboxProperties,
    } = useActiveTextboxAndProperties();
    const { canvas } = useCanvas();

    const handleToggleBold = () => {
        const newIsBold = !activeTextboxProperties.isBold;

        setActiveTextboxProperties({
            ...activeTextboxProperties,
            isBold: newIsBold,
        });

        activeTextbox.set("fontWeight", newIsBold ? "bold" : "normal");
        canvas?.renderAll();
    };

    return (
        <Button
            variant="outline"
            colorScheme="gray-200"
            regular
            size="sm"
            active={activeTextboxProperties.isBold}
            onClick={handleToggleBold}>
            <ButtonIcon icon={RiBold} />
        </Button>
    );
};

export default BoldToggle;
