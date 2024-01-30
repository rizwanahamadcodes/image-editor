import Button, { ButtonIcon } from "@/components/Button/Button";
import { useActiveTextObject } from "@/context/useActiveTextObject";
import { useCanvas } from "@/context/useCanvas";
import { useEffect, useState } from "react";
import { RiUnderline } from "react-icons/ri";

type UnderlineToggleProps = {};

const UnderlineToggle = (props: UnderlineToggleProps) => {
    const { activeTextObject } = useActiveTextObject();
    const [isUnderlined, setIsUnderlined] = useState<boolean>(
        activeTextObject.get("underline") || false
    );
    const { canvas } = useCanvas();

    useEffect(() => {
        const isUnderlinedFromActiveTextObject =
            activeTextObject.get("underline");
        if (!isUnderlinedFromActiveTextObject) return;

        setIsUnderlined(isUnderlinedFromActiveTextObject);
    }, [activeTextObject]);

    useEffect(() => {
        activeTextObject.set("underline", isUnderlined);
        canvas?.renderAll();
    }, [isUnderlined]);

    const handleUnderlineToggleClick = () => {
        setIsUnderlined((prevIsUnderlined) => !prevIsUnderlined);
    };

    return (
        <Button
            variant="outline"
            colorScheme="gray-200"
            regular
            size="sm"
            active={isUnderlined}
            onClick={handleUnderlineToggleClick}>
            <ButtonIcon icon={RiUnderline} />
        </Button>
    );
};

export default UnderlineToggle;
