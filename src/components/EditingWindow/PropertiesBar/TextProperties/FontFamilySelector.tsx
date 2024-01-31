import { useActiveTextboxAndProperties } from "@/context/useActiveTextboxAndProperties";
import { useCanvas } from "@/context/useCanvas";
import { fontFamilies } from "@/data/fontFamilies";
import clsx from "clsx";
import Select from "react-select";

type FontFamilyOptionObject = { value: string; label: string };

export const getFontFamilyOptionObjectFromFontFamily = (fontValue: string) => {
    return { value: fontValue, label: fontFamilies[fontValue] };
};

const FontFamilySelector = () => {
    const {
        activeTextbox,
        activeTextboxProperties,
        setActiveTextboxProperties,
    } = useActiveTextboxAndProperties();
    const { canvas } = useCanvas();

    const fontFamilyOptionsForSelect: FontFamilyOptionObject[] = Object.keys(
        fontFamilies
    ).map((fontValue) => {
        return getFontFamilyOptionObjectFromFontFamily(fontValue);
    });

    const handleFontFamilyChange = (
        fontFamilyFromSelect: FontFamilyOptionObject
    ) => {
        //  it is important to import the WebFont here inline otherwise app breaks with window not defined error even if it's a client component
        const WebFont = require("webfontloader");
        WebFont.load({
            google: {
                families: [fontFamilyFromSelect.value],
            },

            active: () => {
                activeTextbox.set("fontFamily", fontFamilyFromSelect.value);
                canvas?.renderAll();
            },
        });

        setActiveTextboxProperties((prevActiveTextboxProperties) => {
            return {
                ...prevActiveTextboxProperties,
                fontFamily: fontFamilyFromSelect.value,
            };
        });
    };

    return (
        <Select
            options={fontFamilyOptionsForSelect}
            value={getFontFamilyOptionObjectFromFontFamily(
                activeTextboxProperties.fontFamily
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
                handleFontFamilyChange(option);
            }}
            defaultValue={getFontFamilyOptionObjectFromFontFamily(
                activeTextboxProperties.fontFamily
            )}
        />
    );
};

export default FontFamilySelector;
