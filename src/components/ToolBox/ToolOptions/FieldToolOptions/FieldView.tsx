import { useCanvas } from "@/context/useCanvas";
import { useCurrentProject } from "@/context/useCurrentProject";
import { selectListByListId } from "@/store/slices/listsSlice";
import { RootState } from "@/store/store";
import { fabric } from "fabric";
import Image from "next/image";
import { IoChevronBackOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

type FieldViewProps = { listId: number };

const FieldView = (props: FieldViewProps) => {
    const { listId } = props;
    const { project, setProject } = useCurrentProject();
    const { canvas } = useCanvas();

    const list = useSelector((state: RootState) =>
        selectListByListId(state, listId)
    );

    const handleSelectAnotherClick = () => {
        setProject({ ...project, listId: undefined });
    };

    if (!list) {
        return "null";
    }

    const addFieldToCanvas = (columnName: string) => {
        const typeOfField = list.fieldTypes[columnName];
        switch (typeOfField) {
            case "textbox":
                const fabricTextBox = new fabric.Textbox(columnName);
                canvas?.add(fabricTextBox);
                break;
            case "image":
                fabric.Image.fromURL("/images/lists/default.jpg", (img) => {
                    const canvasHeight = canvas?.getHeight() || 1;
                    const canvasWidth = canvas?.getWidth() || 1;
                    const canvasZoomLevel = canvas?.getZoom() || 1;
                    const percievedCanvasHeight =
                        canvasHeight / canvasZoomLevel;
                    const percievedCanvasWidth = canvasWidth / canvasZoomLevel;

                    const imageHeight = img.get("height") || 1;
                    const imageWidth = img.get("width") || 1;

                    const scaleRatioX = canvasWidth / imageWidth;

                    if (scaleRatioX * imageHeight <= canvasHeight) {
                        img.scaleToWidth(percievedCanvasWidth, true);
                    } else {
                        img.scaleToHeight(percievedCanvasHeight, true);
                    }
                    console.log("img Width", img.getScaledWidth());
                    console.log("img Height", img.getScaledHeight());
                    img.set({
                        left: 0,
                        top: 0,
                        lockUniScaling: true,
                    });

                    canvas?.add(img);
                });
                break;
            default:
                alert("unknow field type");
        }
    };

    return (
        <div className="flex flex-col gap-0.5">
            <button
                className="flex items-center gap-0.5 rounded-full px-1 h-2 border-gray-200 border font-medium text-gray-400 hover:border-gray-300 hover:text-gray-600 mb-1"
                onClick={handleSelectAnotherClick}>
                <IoChevronBackOutline /> Select Another
            </button>
            <h4 className="text-gray-400 font-medium">
                Click to add to the project
            </h4>
            <div className="flex flex-wrap gap-0.5">
                {Object.keys(list.data[0]).map((columnName) => {
                    const typeOfField = list.fieldTypes[columnName];

                    switch (typeOfField) {
                        case "textbox":
                            return (
                                <p
                                    onClick={() => {
                                        addFieldToCanvas(columnName);
                                    }}
                                    key={columnName}
                                    className="cursor-pointer hover:text-gray-700 hover:border-gray-400 p-0.75 border border-gray-200  rounded-1 text-gray-500 font-medium">
                                    {columnName}
                                </p>
                            );
                            break;
                        case "image":
                            return (
                                <div
                                    onClick={() => {
                                        addFieldToCanvas(columnName);
                                    }}
                                    key={columnName}
                                    className="cursor-pointer flex overflow-hidden items-center gap-0.5 pr-0.75 hover:text-gray-700 hover:border-gray-400 border border-gray-200  rounded-1 text-gray-500 font-medium">
                                    <Image
                                        src={"/images/lists/default.jpg"}
                                        className="h-3 w-3 object-cover"
                                        height={100}
                                        width={100}
                                        alt="Default image"
                                    />
                                    {columnName}
                                </div>
                            );
                    }
                })}
            </div>
        </div>
    );
};

export default FieldView;
