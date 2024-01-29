import { useActiveTextObject } from "@/context/useActiveTextObject";
import { useCanvas } from "@/context/useCanvas";
import { fontFamilies } from "@/data/fontFamilies";
import clsx from "clsx";
import { useState } from "react";
import Select from "react-select";

type FontFamilyOptionObject = { value: string; label: string };

const FontFamilySelector = () => {
    const [fontFamilyChanged, setFontFamilyChanged] = useState(true);

    const { activeTextObject } = useActiveTextObject();
    const { canvas } = useCanvas();

    const getSingleValueObjectFromFontFamilyString = (fontValue: string) => {
        return { value: fontValue, label: fontFamilies[fontValue] };
    };

    const fontFamiliOptionsForSelect: FontFamilyOptionObject[] = Object.keys(
        fontFamilies
    ).map((fontValue) => {
        return getSingleValueObjectFromFontFamilyString(fontValue);
    });

    const setFontFamily = (fontFamily: FontFamilyOptionObject) => {
        //  it is important to import the WebFont here inline otherwise app breaks with window not defined error even if it's a client component

        const WebFont = require("webfontloader");
        WebFont.load({
            google: {
                families: [fontFamily.value],
            },

            active: () => {
                activeTextObject.set("fontFamily", fontFamily.value);
                canvas?.renderAll();
                // this is done just to cause a re render;
                setFontFamilyChanged(
                    (prevFontsetFontFamilyChanged) =>
                        !prevFontsetFontFamilyChanged
                );
            },
        });
    };

    return (
        <Select
            options={fontFamiliOptionsForSelect}
            value={getSingleValueObjectFromFontFamilyString(
                activeTextObject.get("fontFamily") || "Times New Roman"
            )}
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
            defaultValue={getSingleValueObjectFromFontFamilyString(
                activeTextObject.get("fontFamily") || "Times New Roman"
            )}
        />
    );
};

export default FontFamilySelector;
