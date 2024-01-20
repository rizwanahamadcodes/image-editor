import { ToolType } from "@/components/ToolBox/ToolBox";
import FieldToolProperties from "@/components/ToolBox/ToolProperties/FieldToolProperties/FieldToolProperties";
import ImageToolProperties from "@/components/ToolBox/ToolProperties/ImageToolProperties";
import clsx from "clsx";

type ToolPropertiesProps = {
    showProperties: boolean;
    activeTool: ToolType;
};

export const ToolProperties = (props: ToolPropertiesProps) => {
    const { showProperties, activeTool } = props;

    const getToolProperties = () => {
        switch (activeTool.toolId) {
            case "images":
                return <ImageToolProperties />;
            case "text":
                return <p>Text Properties</p>;
            case "fields":
                return <FieldToolProperties />;
            case "shapes":
                return <p>Shapes properties</p>;
            default:
                return <p>Select a Tool</p>;
        }
    };

    return (
        <div
            className={clsx(
                "overflow-hidden transition-all duration-[7000] grow flex flex-col ml-auto h-full w-16",
                showProperties ? "border-r border-r-gray-100" : ""
            )}>
            <h4 className="shrink-0 capitalize font-medium h-4 border-b border-b-gray-100 px-1.5 text-gray-700 flex items-center">
                {activeTool.toolName}
            </h4>
            <div className="p-1 grow overflow-auto">{getToolProperties()}</div>
        </div>
    );
};
