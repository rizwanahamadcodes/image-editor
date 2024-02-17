import Button from "@/components/Button/Button";
import { useCanvas } from "@/context/useCanvas";
import { fabric } from "fabric";

type TextToolOptionsProps = {};

const TextToolOptions = (props: TextToolOptionsProps) => {
    const {} = props;
    const { canvas } = useCanvas();
    const addTextBoxToCanvas = () => {
        const fabricTextBox = new fabric.Textbox("Your Text Here", {});
        canvas?.add(fabricTextBox);
    };

    return (
        <div className="p-1">
            <Button
                variant="solid"
                colorScheme="gray-500"
                size="sm"
                className="!w-full !sm:w-auto"
                onClick={addTextBoxToCanvas}>
                Add a text box
            </Button>
        </div>
    );
};

export default TextToolOptions;
