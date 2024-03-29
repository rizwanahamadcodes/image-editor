import Tool from "@/components/ToolBox/ToolBar/Tool";
import { ToolType } from "@/components/ToolBox/ToolBox";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

type ToolBarProps = {
    tools: ToolType[];
    activeTool: ToolType;
    setActiveTool: React.Dispatch<React.SetStateAction<ToolType>>;
    prevActiveTool: ToolType;
    setPrevActiveTool: React.Dispatch<React.SetStateAction<ToolType>>;
    showOptions: boolean;
    setShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
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

    const handleToolbarHamburgerClick = () => {
        setShowOptions((prevShowProperty) => !prevShowProperty);
    };

    return (
        <div className="flex absolute bg-white z-50 h-full w-4 flex-col border-r border-r-gray-100">
            <button
                className="h-4 w-4 flex items-center justify-center border-b-gray-100 border-b shrink-0"
                onClick={handleToolbarHamburgerClick}>
                {showOptions ? (
                    <IoChevronBackOutline className="text-1.325 text-gray-500 hover:text-gray-700" />
                ) : (
                    <IoChevronForwardOutline className="text-1.325 text-gray-500 hover:text-gray-700" />
                )}
            </button>
            <nav className="grow p-0.375 overflow-y-auto">
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
