import Button, { ButtonIcon } from "@/components/Button/Button";
import { useCanvas } from "@/context/useCanvas";
import { useActiveTextboxAndProperties } from "@/context/useActiveTextboxAndProperties";
import { fontFamilies } from "@/data/fontFamilies";
import { IoReloadSharp } from "react-icons/io5";

type TextResetterProps = {};

const TextResetter = (props: TextResetterProps) => {
    const {} = props;
    const { canvas } = useCanvas();
    const {
        activeTextbox,
        activeTextboxProperties,
        setActiveTextboxProperties,
    } = useActiveTextboxAndProperties();

    const handleAspectRatioReset = () => {
        setActiveTextboxProperties({
            fontFamily: "Times New Roman",
            fontSize: 18,
            color: "#000000",
            isBold: false,
            isItalic: false,
            alignment: "left",
            isUnderlined: false,
        });

        activeTextbox.set({
            fontFamily: "Times New Roman",
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
        activeTextbox.setCoords();
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
