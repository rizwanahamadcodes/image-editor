import { ToolType } from "@/components/ToolBox/ToolBox";

type ToolProps = {
    tool: ToolType;
    activeTool: ToolType;
    setActiveTool: React.Dispatch<React.SetStateAction<ToolType>>;
};

const Tool = (props: ToolProps) => {
    const { tool, activeTool, setActiveTool } = props;

    return <div>Tool</div>;
};

export default Tool;
