import Button, { ButtonIcon } from "@/components/Button/Button";
import { useActiveTextboxAndProperties } from "@/context/useActiveTextboxAndProperties";
import { useCanvas } from "@/context/useCanvas";
import { FiMinus, FiPlus } from "react-icons/fi";

type FontSizeChangerProps = {};

const FontSizeChanger = (props: FontSizeChangerProps) => {
    const {
        activeTextbox,
        activeTextboxProperties,
        setActiveTextboxProperties,
    } = useActiveTextboxAndProperties();
    const { canvas } = useCanvas();

    const setFontSize = (fontSizeFromInput: number) => {
        setActiveTextboxProperties({
            ...activeTextboxProperties,
            fontSize: fontSizeFromInput,
        });

        activeTextbox.set("fontSize", fontSizeFromInput);
        canvas?.renderAll();
    };

    return (
        <div className="flex">
            <Button
                regular
                colorScheme="gray-200"
                variant="outline"
                size="sm"
                className="!rounded-r-0"
                onClick={() => {
                    setFontSize(activeTextboxProperties.fontSize - 1);
                }}>
                <ButtonIcon icon={FiMinus} />
            </Button>
            <input
                onChange={(e) => {
                    setFontSize(Number(e.target.value));
                }}
                type="number"
                className="text-center w-3 min-w-0 grow border-y border-y-gray-200 focus:ring focus:ring-offset-2 focus:ring-offset-white focus:ring-primary/50 focus:z-10 focus:outline-none focus:border-x focus:border-x-gray-200"
                value={activeTextboxProperties.fontSize}
            />
            <Button
                regular
                colorScheme="gray-200"
                variant="outline"
                size="sm"
                className="!rounded-l-0"
                onClick={() => {
                    setFontSize(activeTextboxProperties.fontSize + 1);
                }}>
                <ButtonIcon icon={FiPlus} />
            </Button>
        </div>
    );
};

export default FontSizeChanger;
