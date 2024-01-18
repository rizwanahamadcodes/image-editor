import { ToolBar } from "@/components/ToolBox/ToolBar";
import { ToolProperties } from "@/components/ToolBox/ToolProperties";
import { useProject } from "@/pages/projects/[projectId]/useProject";
import { useState } from "react";
import { IconType } from "react-icons";
import { FaList, FaRegImage } from "react-icons/fa6";
import { PiTextTBold } from "react-icons/pi";
import { IoImage, IoShapesOutline, IoText } from "react-icons/io5";
import { IoIosImage, IoIosList, IoIosText } from "react-icons/io";

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

    const project = useProject();

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
