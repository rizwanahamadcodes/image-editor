import Tool from "@/components/ToolBox/Tool";
import { ToolType } from "@/components/ToolBox/ToolBox";

type ToolBarProps = {
    tools: ToolType[];
    activeTool: ToolType;
    setActiveTool: React.Dispatch<React.SetStateAction<ToolType>>;
};

export const ToolBar = (props: ToolBarProps) => {
    const { tools, activeTool, setActiveTool } = props;

    return (
        <nav className="bg-gray-100 w-4">
            <ul>
                <li>
                    {tools.map((tool) => (
                        <Tool
                            key={tool.toolId}
                            tool={tool}
                            activeTool={activeTool}
                            setActiveTool={setActiveTool}
                        />
                    ))}
                </li>
            </ul>
        </nav>
    );
};
