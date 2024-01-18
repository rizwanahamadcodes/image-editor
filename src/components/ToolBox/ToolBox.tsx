import { ToolBar } from "@/components/ToolBox/ToolBar";
import { ToolProperties } from "@/components/ToolBox/ToolProperties";
import { useProject } from "@/pages/projects/[projectId]/useProject";
import { useState } from "react";
import { IconType } from "react-icons";
import { FaList, FaRegImage } from "react-icons/fa6";
import { RxText } from "react-icons/rx";
import { PiTextTBold } from "react-icons/pi";

type ToolBoxProps = {};

export type ToolType = {
    toolId: "images" | "fields" | "text";
    toolName: string;
    icon: IconType;
};

const tools: ToolType[] = [
    {
        toolId: "images",
        toolName: "images",
        icon: FaRegImage,
    },
    {
        toolId: "fields",
        toolName: "fields",
        icon: FaList,
    },
    {
        toolId: "text",
        toolName: "text",
        icon: PiTextTBold,
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
                tools={tools}
                activeTool={activeTool}
                setActiveTool={setActiveTool}
                setShowProperties={setShowProperties}
            />
            {showProperties ? <ToolProperties activeTool={activeTool} /> : ""}
        </aside>
    );
};
