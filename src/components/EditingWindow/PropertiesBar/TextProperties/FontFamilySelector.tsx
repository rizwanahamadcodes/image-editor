import { useCanvas } from "@/context/useCanvas";
import { useTextProperties } from "@/context/useTextProperties";
import { FontFamily, fontFamilies } from "@/data/fontFamilies";
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

    return (
        <Select
            options={fontFamilies}
            value={textProperties.fontFamily}
            className="w-10 h-2.25"
            onChange={(option) => {
                if (!option) return;
                setFontFamily(option);
            }}
            defaultValue={textProperties.fontFamily}
        />
    );
};

export default FontFamilySelector;
