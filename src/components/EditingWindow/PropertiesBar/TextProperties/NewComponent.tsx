import { useCanvas } from "@/context/useCanvas";
import clsx from "clsx";

type NewComponentProps = {
    activeObject: fabric.Object;
    setActiveObject: Function;
};

const NewComponent = (props: NewComponentProps) => {
    const { activeObject, setActiveObject } = props;
    const { canvas } = useCanvas();

    return (
        <button
            className={clsx(
                activeObject.fontWeight === "bold" ? "font-bold" : ""
            )}
            onClick={() => {
                // setActiveObject((prevObject: fabric.Object) => {
                //     prevObject.set("fontSize", 100);
                //     prevObject.clone((obj) => {
                //         return obj;
                //     });
                // });

                activeObject.set("fontSize", 100);
                activeObject.set("fontWeight", "bold");
                activeObject.clone((obj) => {
                    setActiveObject(obj);
                });
                canvas?.renderAll();
            }}>
            {activeObject.get("fontSize")}
        </button>
    );
};

export default NewComponent;
