import { ToolBar } from "@/components/ToolBox/ToolBar/ToolBar";
import { ToolOptions } from "@/components/ToolBox/ToolOptions/ToolOptions";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { IoIosList } from "react-icons/io";
import { IoImage, IoShapesOutline, IoText } from "react-icons/io5";

export type ToolType = {
    toolId: "images" | "fields" | "text" | "shapes";
    toolName: string;
    icon: IconType;
};

const tools: ToolType[] = [
    {
        toolId: "images",
        toolName: "images",
        icon: IoImage,
    },
    {
        toolId: "fields",
        toolName: "fields",
        icon: IoIosList,
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

export const ToolBox = () => {
    const [activeTool, setActiveTool] = useState<ToolType>(tools[0]);
    const [showOptions, setShowOptions] = useState(false);

    // useEffect(() => {
    // setShowOptions(true);
    // }, [activeTool]);

    // toolbox width = toolbarwidth + tooloptions width
    // 20 = 4 + 16
    // all three has to be specified for the desired grow and shrink toggle

    // hence when showOptions is true it is full width ie 20,
    // else it is the width of the toolbar

    return (
        <aside
            className={clsx(
                "relative shrink-0 transition-all overflow-hidden",
                showOptions ? "w-20" : "w-4"
            )}>
            <ToolBar
                showOptions={showOptions}
                tools={tools}
                activeTool={activeTool}
                setActiveTool={setActiveTool}
                setShowOptions={setShowOptions}
            />
            <ToolOptions showOptions={showOptions} activeTool={activeTool} />
        </aside>
    );
};
