import { ToolType } from "@/components/ToolBox/ToolBox";

type ToolProps = {
    tool: ToolType;
    activeTool: ToolType;
    setActiveTool: React.Dispatch<React.SetStateAction<ToolType>>;
};

const Tool = (props: ToolProps) => {
    const { tool, activeTool, setActiveTool } = props;

    const { icon: Icon, toolName, toolId } = tool;

    const handleToolClick = () => {
        setActiveTool(tool);
    };

    return (
        <button onClick={handleToolClick}>
            <Icon />
            <span>{toolName}</span>
        </button>
    );
};

export default Tool;
