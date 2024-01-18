import { ToolType } from "@/components/ToolBox/ToolBox";
import FieldProperties from "./FieldProperties";

type ToolPropertiesProps = {
    activeTool: ToolType;
};

export const ToolProperties = (props: ToolPropertiesProps) => {
    const { activeTool } = props;

    const getToolProperties = () => {
        switch (activeTool.toolId) {
            case "images":
                return <p>Template Properties</p>;
            case "text":
                return <FieldProperties />;
            case "fields":
                return <p>Fields properties</p>;
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
