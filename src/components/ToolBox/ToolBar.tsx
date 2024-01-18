import Tool from "@/components/ToolBox/Tool";
import { ToolType } from "@/components/ToolBox/ToolBox";
import { RxHamburgerMenu } from "react-icons/rx";

type ToolBarProps = {
    tools: ToolType[];
    activeTool: ToolType;
    setActiveTool: React.Dispatch<React.SetStateAction<ToolType>>;
    setShowProperties: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ToolBar = (props: ToolBarProps) => {
    const { tools, activeTool, setActiveTool, setShowProperties } = props;

    const handleToolbarHamburgerClick = () => {
        setShowProperties((prevShowProperty) => !prevShowProperty);
    };

    return (
        <div className="flex w-4 flex-col border-r border-r-gray-100">
            <button
                className="h-4 w-4 flex items-center justify-center border-b-gray-100 border-b"
                onClick={handleToolbarHamburgerClick}>
                <RxHamburgerMenu className="text-1.5 text-gray-500 hover:text-gray-700" />
            </button>
            <nav className="grow p-0.375">
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
        </div>
    );
};
