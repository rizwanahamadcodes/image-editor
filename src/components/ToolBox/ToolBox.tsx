import { ToolBar } from "@/components/ToolBox/ToolBar/ToolBar";
import { ToolOptions } from "@/components/ToolBox/ToolOptions/ToolOptions";
import { PropertiesBarMode } from "@/pages/projects/[projectId]/edit";
import clsx from "clsx";
import { MutableRefObject, useEffect, useRef, useState } from "react";
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
    optionsButtonRef: MutableRefObject<HTMLButtonElement | null>;
};
export const ToolBox = (props: ToolBoxProps) => {
    const { showOptions, setShowOptions, optionsButtonRef } = props;

    const [activeTool, setActiveTool] = useState<ToolType>(tools[0]);
    const [prevActiveTool, setPrevActiveTool] = useState<ToolType>(tools[0]);
    const asideRef = useRef<HTMLDivElement | null>(null);

    console.log(optionsButtonRef);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                !asideRef ||
                !asideRef.current ||
                !optionsButtonRef ||
                !optionsButtonRef.current
            ) {
                return;
            }

            const target = e.target as Node;

            // If click is outside asideRef and NOT on optionsButtonRef
            if (
                !asideRef.current.contains(target) &&
                !optionsButtonRef.current.contains(target)
            ) {
                setShowOptions((prevOptions) => {
                    if (prevOptions === "options") {
                        return "menu";
                    }
                    return "menu";
                });
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setShowOptions, optionsButtonRef]);

    return (
        <aside
            ref={asideRef}
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
