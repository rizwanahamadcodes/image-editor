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
        <div className="flex rounded-0.875 gap-0.375 p-0.375 bg-white z-50 h-full w-4 flex-col">
            <button
                className="h-3.25 text-gray-500 items-center flex justify-center rounded-0.5 flex-col w-full hover:text-gray-800 hover:bg-gray-100"
                onClick={handleToolbarHamburgerClick}>
                {showOptions ? (
                    <IoChevronBackOutline className="text-1.5 text-gray-500 hover:text-gray-700" />
                ) : (
                    <IoChevronForwardOutline className="text-1.5 text-gray-500 hover:text-gray-700" />
                )}
            </button>
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
