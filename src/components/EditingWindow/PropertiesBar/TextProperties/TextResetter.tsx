import Button, { ButtonIcon } from "@/components/Button/Button";
import { useCanvas } from "@/context/useCanvas";
import { useActiveTextObject } from "@/context/useActiveTextboxAndProperties";
import { fontFamilies } from "@/data/fontFamilies";
import { IoReloadSharp } from "react-icons/io5";

type TextResetterProps = {};

const TextResetter = (props: TextResetterProps) => {
    const {} = props;
    const { canvas } = useCanvas();
    const { activeTextObject } = useActiveTextObject();

    const handleAspectRatioReset = () => {
        activeTextObject.set({
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
        activeTextObject.setCoords();
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
