import { useActiveTextObject } from "@/context/useActiveTextObject";
import { useCanvas } from "@/context/useCanvas";
import { fontFamilies } from "@/data/fontFamilies";
import clsx from "clsx";
import { useEffect, useState } from "react";
import Select from "react-select";

type FontFamilyOptionObject = { value: string; label: string };

export const getSingleValueObjectFromFontFamilyString = (fontValue: string) => {
    return { value: fontValue, label: fontFamilies[fontValue] };
};

const FontFamilySelector = () => {
    const [fontFamily, setFontFamily] = useState<FontFamilyOptionObject>(
        getSingleValueObjectFromFontFamilyString("Times New Roman")
    );
    const { activeTextObject } = useActiveTextObject();
    const { canvas } = useCanvas();

    useEffect(() => {
        const fontFamilyFromActiveTextObject =
            activeTextObject.get("fontFamily");
        if (!fontFamilyFromActiveTextObject) return;

        setFontFamily(
            getSingleValueObjectFromFontFamilyString(
                fontFamilyFromActiveTextObject
            )
        );
    }, [activeTextObject]);

    const fontFamiliOptionsForSelect: FontFamilyOptionObject[] = Object.keys(
        fontFamilies
    ).map((fontValue) => {
        return getSingleValueObjectFromFontFamilyString(fontValue);
    });

    useEffect(() => {
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
            },
        });
    }, [fontFamily]);

    const handleFontFamilyChange = (
        fontFamilyFromSelect: FontFamilyOptionObject
    ) => {
        setFontFamily(fontFamilyFromSelect);
    };

    return (
        <Select
            options={fontFamiliOptionsForSelect}
            value={fontFamily}
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
                handleFontFamilyChange(option);
            }}
            defaultValue={fontFamily}
        />
    );
};

export default FontFamilySelector;
