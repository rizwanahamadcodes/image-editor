import { ToolBar } from "@/components/ToolBox/ToolBar";
import { ToolProperties } from "@/components/ToolBox/ToolProperties";
import { useProject } from "@/pages/projects/[projectId]/useProject";
import { useState } from "react";
import { IconType } from "react-icons";
import { FaList, FaRegImage } from "react-icons/fa6";

type ToolBoxProps = {};

export type ToolType = {
    toolId: string;
    toolName: string;
    icon: IconType;
};

const tools: ToolType[] = [
    {
        toolId: "templates",
        toolName: "Templates",
        icon: FaRegImage,
    },
    {
        toolId: "fields",
        toolName: "Fields",
        icon: FaList,
    },
];

export const ToolBox = (props: ToolBoxProps) => {
    const [activeTool, setActiveTool] = useState<ToolType>(tools[0]);

    const {} = props;

    const project = useProject();

    return (
        <aside className="border-r flex border-r-gray-100 w-16 shrink-0">
            <ToolBar
                tools={tools}
                activeTool={activeTool}
                setActiveTool={setActiveTool}
            />
            <ToolProperties />
        </aside>
    );
};
