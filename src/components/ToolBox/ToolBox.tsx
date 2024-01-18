import { ToolBar } from "@/components/ToolBox/ToolBar";
import { ToolProperties } from "@/components/ToolBox/ToolProperties";
import { useState } from "react";
import { IconType } from "react-icons";
import { IoIosList } from "react-icons/io";
import { IoImage, IoShapesOutline, IoText } from "react-icons/io5";

type ToolBoxProps = {};

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

export const ToolBox = (props: ToolBoxProps) => {
    const [activeTool, setActiveTool] = useState<ToolType>(tools[0]);
    const [showProperties, setShowProperties] = useState(true);

    const {} = props;

    return (
        <aside className="flex shrink-0">
            <ToolBar
                showProperties={showProperties}
                tools={tools}
                activeTool={activeTool}
                setActiveTool={setActiveTool}
                setShowProperties={setShowProperties}
            />
            {showProperties ? <ToolProperties activeTool={activeTool} /> : ""}
        </aside>
    );
};
