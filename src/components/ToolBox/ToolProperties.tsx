import { ToolType } from "./ToolBox";

type ToolPropertiesProps = { activeTool: ToolType };

export const ToolProperties = (props: ToolPropertiesProps) => {
    const { activeTool } = props;

    const getToolProperties = () => {
        switch (activeTool.toolId) {
            case "templates":
                return <p>Template Properties</p>;
            case "fields":
                return <p>Fields Properties</p>;
            default:
                return <p>Select a Tool</p>;
        }
    };

    return <div className="grow bg-white">{getToolProperties()}</div>;
};
