import { ToolType } from "@/components/ToolBox/ToolBox";
import FieldProperties from "./FieldProperties";
import ImageProperties from "./ImageProperties";

type ToolPropertiesProps = {
    activeTool: ToolType;
};

export const ToolProperties = (props: ToolPropertiesProps) => {
    const { activeTool } = props;

    const getToolProperties = () => {
        switch (activeTool.toolId) {
            case "images":
                return <ImageProperties />;
            case "text":
                return <p>Text Properties</p>;
            case "fields":
                return <FieldProperties />;
            case "shapes":
                return <p>Shapes properties</p>;
            default:
                return <p>Select a Tool</p>;
        }
    };

    return (
        <div className="border-r border-r-gray-100 w-16 grow flex flex-col">
            <h4 className="capitalize font-medium h-4 border-b border-b-gray-100 px-1.5 text-gray-700 flex items-center">
                {activeTool.toolName}
            </h4>
            <div className="p-1.5">{getToolProperties()}</div>
        </div>
    );
};
