import Button, { ButtonIcon } from "@/components/Button/Button";
import PopOver from "@/components/PopOver/PopOver";
import { useCanvas } from "@/context/useCanvas";
import { useTextProperties } from "@/context/useTextProperties";
import { FontFamily, fontFamilies } from "@/data/fontFamilies";
import { useToggle } from "@/hooks/useToggle";
import clsx from "clsx";
import { useRef } from "react";
import { LuLigature } from "react-icons/lu";
import Select from "react-select";

type FontFamilySelectorProps = {};

const FontFamilySelector = (props: FontFamilySelectorProps) => {
    const {} = props;
    const { textProperties, setTextProperties } = useTextProperties();
    const { canvas } = useCanvas();

    const setFontFamily = (fontFamily: FontFamily) => {
        //  it is important to import the WebFont here inline otherwise app breaks with window not defined error even if it's a client component
        const activeObject = canvas?.getActiveObject();
        if (!activeObject || !activeObject.isType("textbox")) {
            return;
        }

        const activeTextObject = activeObject as fabric.Textbox;
        const WebFont = require("webfontloader");
        WebFont.load({
            google: {
                families: [fontFamily.value],
            },

            active: () => {
                activeTextObject.set("fontFamily", fontFamily.value);
                canvas?.renderAll();
            },
        });
        setTextProperties({ ...textProperties, fontFamily: fontFamily });
    };

    const fontFamilySelectorCore = () => {
        return (
            <Select
                options={fontFamilies}
                value={textProperties.fontFamily}
                className=""
                classNamePrefix="ff"
                classNames={{
                    container: ({ isFocused }) => clsx("!min-h-0 h-2 w-10"),
                    control: () => "!min-h-0 h-2",
                    indicatorsContainer: () => "h-2",
                    dropdownIndicator: () =>
                        "!p-0 h-2 w-2 flex items-center justify-center",
                    valueContainer: () => "!py-0 !px-0.5",
                    input: () => "!p-0 !m-0",
                }}
                onChange={(option) => {
                    if (!option) return;
                    setFontFamily(option);
                }}
                defaultValue={textProperties.fontFamily}
            />
        );
    };

    const { open, close, toggle, isOpen } = useToggle();
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    return (
        <>
            <div className="hidden sm:block">{fontFamilySelectorCore()}</div>
            <div className="flex sm:hidden gap-0.5 relative">
                <PopOver
                    isOpen={isOpen}
                    close={close}
                    className="left-0"
                    toggleButtonRefs={[buttonRef]}>
                    <div className="bg-white shadow border border-gray-100 rounded-0.375 mt-0.25 p-0.25">
                        {fontFamilySelectorCore()}
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

export default FontFamilySelector;
