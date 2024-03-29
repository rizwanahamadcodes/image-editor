import { ToolType } from "@/components/ToolBox/ToolBox";
import BackgroundToolOptions from "@/components/ToolBox/ToolOptions/BackgroundToolOptions";
import FieldToolOptions from "@/components/ToolBox/ToolOptions/FieldToolOptions/FieldToolOptions";
import ImageToolOptions from "@/components/ToolBox/ToolOptions/ImageToolOptions";
import ShapesToolOptions from "@/components/ToolBox/ToolOptions/ShapesToolOptions";
import TextToolOptions from "@/components/ToolBox/ToolOptions/TextToolOptions";
import clsx from "clsx";

type ToolOptionsProps = {
    showOptions: boolean;
    activeTool: ToolType;
};

const toolOptionsMap: Record<string, React.ReactNode> = {
    background: <BackgroundToolOptions />,
    images: <ImageToolOptions />,
    text: <TextToolOptions />,
    fields: <FieldToolOptions />,
    shapes: <ShapesToolOptions />,
};
export const ToolOptions = (props: ToolOptionsProps) => {
    const { showOptions, activeTool } = props;

    const toolOptions = toolOptionsMap[activeTool.toolId] || (
        <p>Please select a tool</p>
    );

    return (
        <div
            className={clsx(
                "overflow-hidden transition-all duration-[7000] grow flex flex-col ml-auto h-full w-16",
                showOptions ? "border-r border-r-gray-100" : ""
            )}>
            <h4 className="shrink-0 capitalize font-medium h-4 border-b border-b-gray-100 px-1.5 text-gray-700 flex items-center">
                {activeTool.toolName}
            </h4>
            <div className="grow overflow-auto">{toolOptions}</div>
        </div>
    );
};
