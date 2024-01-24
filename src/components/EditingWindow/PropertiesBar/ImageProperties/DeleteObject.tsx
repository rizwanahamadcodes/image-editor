import Button, { ButtonIcon } from "@/components/Button/Button";
import { useCanvas } from "@/context/useCanvas";
import { FaTrash } from "react-icons/fa6";

type DeleteObjectProps = {};

const DeleteObject = (props: DeleteObjectProps) => {
    const {} = props;
    const { canvas } = useCanvas();

    const handleTrashButtonClick = () => {
        const activeObject = canvas?.getActiveObject();

        if (!activeObject) {
            return;
        }

        canvas?.remove(activeObject);
        canvas?.renderAll();
    };

    return (
        <Button variant="solid" onClick={handleTrashButtonClick}>
            <ButtonIcon icon={FaTrash} className="!text-1" />
        </Button>
    );
};

export default DeleteObject;
