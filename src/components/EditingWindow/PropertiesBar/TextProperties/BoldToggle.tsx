import Button, { ButtonIcon } from "@/components/Button/Button";
import { useCanvas } from "@/context/useCanvas";
import { useActiveTextObject } from "@/context/useActiveTextObject";
import clsx from "clsx";
import { BiBold } from "react-icons/bi";
import { RiBold } from "react-icons/ri";
import { useEffect, useState } from "react";

type BoldToggleProps = {};

const BoldToggle = (props: BoldToggleProps) => {
    const { activeTextObject } = useActiveTextObject();
    const [isBold, setIsBold] = useState<boolean>(false);
    const { canvas } = useCanvas();

    useEffect(() => {
        const fontWeightFromActiveTextObject =
            activeTextObject.get("fontWeight");
        if (!fontWeightFromActiveTextObject) return;

        setIsBold(fontWeightFromActiveTextObject === "bold");
    }, [activeTextObject]);

    useEffect(() => {
        activeTextObject.set("fontWeight", isBold ? "bold" : "normal");
        canvas?.renderAll();
    }, [isBold]);

    const handleBoldToggleClick = () => {
        setIsBold((prevIsBold) => !prevIsBold);
    };

    return (
        <Button
            variant="outline"
            colorScheme="gray-200"
            regular
            size="sm"
            active={isBold}
            onClick={handleBoldToggleClick}>
            <ButtonIcon icon={RiBold} />
        </Button>
    );
};

export default BoldToggle;
