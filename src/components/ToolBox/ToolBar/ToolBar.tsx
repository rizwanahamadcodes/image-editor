import Tool from "@/components/ToolBox/ToolBar/Tool";
import { ToolType } from "@/components/ToolBox/ToolBox";
import { PropertiesBarMode } from "@/pages/projects/[projectId]/edit";
import clsx from "clsx";

type ToolBarProps = {
    tools: ToolType[];
    activeTool: ToolType;
    setActiveTool: React.Dispatch<React.SetStateAction<ToolType>>;
    prevActiveTool: ToolType;
    setPrevActiveTool: React.Dispatch<React.SetStateAction<ToolType>>;
    showOptions: PropertiesBarMode;
    setShowOptions: React.Dispatch<React.SetStateAction<PropertiesBarMode>>;
};

export const ToolBar = (props: ToolBarProps) => {
    const {
        tools,
        prevActiveTool,
        setPrevActiveTool,
        activeTool,
        setActiveTool,
        showOptions,
        setShowOptions,
    } = props;

    return (
        <div
            className={clsx(
                "flex rounded-0.875 gap-0.375 bg-white py-0.375 transition-all duration-300 z-50 h-full flex-col",
                showOptions != "hidden" ? "w-4 px-0.375" : "w-0 px-0"
            )}>
            <nav className="grow overflow-y-auto">
                <ul className="flex gap-0.375 flex-col w-full">
                    {tools.map((tool) => (
                        <li className="w-full" key={tool.toolId}>
                            <Tool
                                tool={tool}
                                activeTool={activeTool}
                                setActiveTool={setActiveTool}
                                prevActiveTool={prevActiveTool}
                                setPrevActiveTool={setPrevActiveTool}
                                setShowOptions={setShowOptions}
                            />
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};
