import { RxFontSize } from "react-icons/rx";
import Button, { ButtonIcon } from "@/components/Button/Button";
import PopOver from "@/components/PopOver/PopOver";
import { useToggle } from "@/hooks/useToggle";
import { useRef } from "react";
import { LuLigature } from "react-icons/lu";
import FontFamilySelector from "./FontFamilySelector";
import FontSizeChanger from "./FontSizeChanger";
import { AiOutlineFontSize } from "react-icons/ai";

type FontFamilyAndSizeSelectorProps = {};

const FontFamilyAndSizeSelector = (props: FontFamilyAndSizeSelectorProps) => {
    const {} = props;
    const { open, close, toggle, isOpen } = useToggle();
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const fontFamilyAndSizeSelectorCore = () => {
        return (
            <div className="flex gap-0.5">
                <FontFamilySelector />
                <FontSizeChanger />
            </div>
        );
    };

    return (
        <>
            <div className="hidden lg:block">
                {fontFamilyAndSizeSelectorCore()}
            </div>
            <div className="flex lg:hidden gap-0.5 relative">
                <PopOver
                    isOpen={isOpen}
                    close={close}
                    className="left-0"
                    toggleButtonRefs={[buttonRef]}>
                    <div className="bg-white shadow border border-gray-100 rounded-0.375 mt-0.5 right-0 p-0.25">
                        {fontFamilyAndSizeSelectorCore()}
                    </div>
                </PopOver>

                <Button
                    onClick={toggle}
                    buttonRef={buttonRef}
                    variant="outline"
                    size="sm"
                    regular
                    colorScheme="gray-200">
                    <ButtonIcon icon={AiOutlineFontSize} />
                </Button>
            </div>
        </>
    );
};

export default FontFamilyAndSizeSelector;
