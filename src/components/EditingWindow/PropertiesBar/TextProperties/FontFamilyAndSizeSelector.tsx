import Button, { ButtonIcon } from "@/components/Button/Button";
import PopOver from "@/components/PopOver/PopOver";
import { useToggle } from "@/hooks/useToggle";
import { useRef } from "react";
import FontFamilySelector from "./FontFamilySelector";
import FontSizeChanger from "./FontSizeChanger";
import { ImLigature } from "react-icons/im";
import { LuLigature } from "react-icons/lu";

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
            <div className="hidden sm:block">
                {fontFamilyAndSizeSelectorCore()}
            </div>
            <div className="flex sm:hidden gap-0.5 relative">
                <PopOver
                    isOpen={isOpen}
                    close={close}
                    className="left-0"
                    toggleButtonRefs={[buttonRef]}>
                    <div className="bg-white shadow border border-gray-100 rounded-0.375 mt-0.25 right-0 p-0.25">
                        {fontFamilyAndSizeSelectorCore()}
                    </div>
                </PopOver>

                <Button
                    onClick={toggle}
                    regular
                    btnRef={buttonRef}
                    variant="outline"
                    colorScheme="gray-200"
                    className="">
                    <ButtonIcon icon={LuLigature} />
                </Button>
            </div>
        </>
    );
};

export default FontFamilyAndSizeSelector;