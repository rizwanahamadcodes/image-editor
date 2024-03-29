import { ToolType } from "@/components/ToolBox/ToolBox";
import clsx from "clsx";

type ToolProps = {
    tool: ToolType;
    activeTool: ToolType;
    setActiveTool: React.Dispatch<React.SetStateAction<ToolType>>;
    prevActiveTool: ToolType;
    setPrevActiveTool: React.Dispatch<React.SetStateAction<ToolType>>;
    setShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
};

const Tool = (props: ToolProps) => {
    const {
        tool,
        activeTool,
        setActiveTool,
        setShowOptions,
        prevActiveTool,
        setPrevActiveTool,
    } = props;
    const { toolId, icon: Icon, toolName } = tool;

    const handleToolClick = () => {
        setActiveTool(tool);
        if (tool.toolId === prevActiveTool.toolId) {
            setShowOptions((prevSetShowOptions) => !prevSetShowOptions);
        } else {
            setShowOptions(true);
        }

        setPrevActiveTool(tool);
    };

    return (
        <button
            onClick={handleToolClick}
            className={clsx(
                "h-3.25 text-gray-500 items-center flex justify-center  rounded-0.5 flex-col w-full",
                activeTool.toolId === toolId
                    ? "bg-primary-100 text-primary-600"
                    : "hover:text-gray-800 hover:bg-gray-100"
            )}>
            <Icon className="text-1.25" />
        </button>
    );
};

export default Tool;
