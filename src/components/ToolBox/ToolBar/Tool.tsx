import { ToolType } from "@/components/ToolBox/ToolBox";
import clsx from "clsx";

type ToolProps = {
    tool: ToolType;
    activeTool: ToolType;
    setActiveTool: React.Dispatch<React.SetStateAction<ToolType>>;
};

const Tool = (props: ToolProps) => {
    const { tool, activeTool, setActiveTool } = props;

    const { icon: Icon, toolName } = tool;

    const handleToolClick = () => {
        setActiveTool(tool);
    };

    return (
        <button
            onClick={handleToolClick}
            className={clsx(
                "h-3.25 text-gray-500 items-center flex justify-center  rounded-0.5 flex-col w-full",
                activeTool.toolId === tool.toolId
                    ? "bg-primary-100 text-primary-600"
                    : " hover:text-gray-700"
            )}>
            <Icon className="text-1.25" />
        </button>
    );
};

export default Tool;
