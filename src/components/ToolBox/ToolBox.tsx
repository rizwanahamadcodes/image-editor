import { ToolBar } from "@/components/ToolBox/ToolBar/ToolBar";
import { ToolOptions } from "@/components/ToolBox/ToolOptions/ToolOptions";
import { PropertiesBarMode } from "@/pages/projects/[projectId]/edit";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { IoIosList } from "react-icons/io";
import { IoImage, IoShapesOutline, IoText } from "react-icons/io5";
import { PiSelectionBackground } from "react-icons/pi";

export type ToolType = {
    toolId: "images" | "fields" | "text" | "shapes" | "background";
    toolName: string;
    icon: IconType;
};

const tools: ToolType[] = [
    {
        toolId: "background",
        toolName: "background",
        icon: PiSelectionBackground,
    },
    {
        toolId: "images",
        toolName: "images",
        icon: IoImage,
    },
    {
        toolId: "text",
        toolName: "text",
        icon: IoText,
    },
    {
        toolId: "shapes",
        toolName: "shapes",
        icon: IoShapesOutline,
    },
];
type ToolBoxProps = {
    showOptions: PropertiesBarMode;
    setShowOptions: React.Dispatch<React.SetStateAction<PropertiesBarMode>>;
};
export const ToolBox = (props: ToolBoxProps) => {
    const { showOptions, setShowOptions } = props;

    const [activeTool, setActiveTool] = useState<ToolType>(tools[0]);
    const [prevActiveTool, setPrevActiveTool] = useState<ToolType>(tools[0]);

    // toolbox width = toolbarwidth + tooloptions width
    // 20 = 4 + 16
    // all three has to be specified for the desired grow and shrink toggle

    // hence when showOptions is true it is full width ie 20,
    // else it is the width of the toolbar

    return (
        <aside
            className={clsx(
                "relative flex shrink-0 transition-all duration-1000 overflow-hidden",
                showOptions === "options" ? " gap-0.5" : ""
            )}>
            <ToolBar
                showOptions={showOptions}
                tools={tools}
                activeTool={activeTool}
                setActiveTool={setActiveTool}
                prevActiveTool={prevActiveTool}
                setPrevActiveTool={setPrevActiveTool}
                setShowOptions={setShowOptions}
            />
            <ToolOptions showOptions={showOptions} activeTool={activeTool} />
        </aside>
    );
};
