import Button from "@/components/Button/Button";
import PopOver from "@/components/PopOver/PopOver";
import { useToggle } from "@/hooks/useToggle";
import { useRef } from "react";
import BoldToggle from "./BoldToggle";
import ItalicToggle from "./ItalicToggle";
import UnderlineToggle from "./UnderlineToggle";

type BoldItalicUnderlineTogglesProps = {};

const BoldItalicUnderlineToggles = (props: BoldItalicUnderlineTogglesProps) => {
    const { open, close, toggle, isOpen } = useToggle();
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const boldItalicUnderlineCore = () => {
        return (
            <div className="flex gap-0.5">
                <BoldToggle />
                <ItalicToggle />
                <UnderlineToggle />
            </div>
        );
    };

    return (
        <>
            <div className="hidden md:block">{boldItalicUnderlineCore()}</div>
            <div className="flex md:hidden gap-0.5 relative">
                <PopOver
                    isOpen={isOpen}
                    close={close}
                    className="right-0"
                    toggleButtonRefs={[buttonRef]}>
                    <div className="bg-white shadow border border-gray-100 rounded-0.625 mt-0.5 right-0 p-0.25">
                        {boldItalicUnderlineCore()}
                    </div>
                </PopOver>

                <Button
                    onClick={toggle}
                    regular
                    size="sm"
                    buttonRef={buttonRef}
                    variant="outline"
                    colorScheme="gray-200"
                    className="!font-semibold italic underline text-1.125 decoration-2 decoration-gray-400">
                    B
                </Button>
            </div>
        </>
    );
};

export default BoldItalicUnderlineToggles;
