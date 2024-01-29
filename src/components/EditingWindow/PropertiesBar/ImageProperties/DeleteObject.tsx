import Button, { ButtonIcon } from "@/components/Button/Button";
import { useCanvas } from "@/context/useCanvas";
import { FaTrash } from "react-icons/fa6";
import { fabric } from "fabric";

type DeleteObjectProps = {
    activeObject: fabric.Object;
};

const DeleteObject = (props: DeleteObjectProps) => {
    const { activeObject } = props;
    const { canvas } = useCanvas();

    const handleTrashButtonClick = () => {
        canvas?.remove(activeObject);
        canvas?.renderAll();
    };

    return (
        <Button
            variant="outline"
            size="sm"
            colorScheme="gray-200"
            regular
            onClick={handleTrashButtonClick}>
            <ButtonIcon icon={FaTrash} className="!text-1" />
        </Button>
    );
};

export default DeleteObject;
