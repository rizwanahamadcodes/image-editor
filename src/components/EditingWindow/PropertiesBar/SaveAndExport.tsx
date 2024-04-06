import Button, { ButtonIcon } from "@/components/Button/Button";
import PopOver from "@/components/PopOver/PopOver";
import { useActiveProject } from "@/context/useActiveProject";
import { useCanvas } from "@/context/useCanvas";
import { useToggle } from "@/hooks/useToggle";
import { updateProject } from "@/store/slices/projectsSlice";
import { RootState } from "@/store/store";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import { AiOutlineFontSize } from "react-icons/ai";
import { FaSave } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { PiUploadSimpleBold } from "react-icons/pi";
import { useDispatch } from "react-redux";
type SaveAndExportProps = {
    className?: string;
};

const SaveAndExport = (props: SaveAndExportProps) => {
    const { className } = props;
    const { canvas, setCanvas } = useCanvas();
    const { activeProject, setActiveProject } = useActiveProject();
    const dispatch = useDispatch();
    const { open, close, toggle, isOpen } = useToggle();

    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const saveProject = () => {
        const clonedCanvas = canvas?.clone((clone: any) => {
            const { version, objects, ...otherProperties } = JSON.parse(
                activeProject.canvas
            );
            const canvasHeight = otherProperties.height;
            const canvasWidth = otherProperties.width;
            clone.setHeight(canvasHeight);
            clone.setWidth(canvasWidth);
            setActiveProject({
                ...activeProject,
                canvas: JSON.stringify(clone?.toJSON(["height", "width"])),
            });
        });
    };

    const exportProject = () => {
        const canvasPng = canvas?.toDataURL({ format: "png" });
        const link = document.createElement("a");
        link.download = "canvas_export.png";
        if (canvasPng) {
            link.href = canvasPng;
        }
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    useEffect(() => {
        dispatch(
            updateProject({
                project: activeProject,
                projectId: activeProject.projectId,
            })
        );
    }, [activeProject]);

    return (
        <>
            <div className="flex gap-0.5 relative">
                <PopOver
                    isOpen={isOpen}
                    close={close}
                    className="right-0"
                    toggleButtonRefs={[buttonRef]}>
                    <div className="bg-white gap-0.5 flex flex-col shadow border border-gray-100 rounded-0.625 mt-0.5 right-0 p-0.25">
                        <Button
                            variant="solid"
                            colorScheme="primary"
                            size="sm"
                            onClick={saveProject}>
                            <ButtonIcon icon={FaSave} />
                            Save
                        </Button>
                        <Button
                            onClick={exportProject}
                            variant="outline"
                            colorScheme="primary"
                            size="sm">
                            <ButtonIcon icon={PiUploadSimpleBold} />
                            Export
                        </Button>
                    </div>
                </PopOver>

                <Button
                    onClick={toggle}
                    buttonRef={buttonRef}
                    variant="ghost"
                    size="sm"
                    regular
                    colorScheme="gray-200">
                    <ButtonIcon icon={HiOutlineDotsVertical} />
                </Button>
            </div>
        </>
    );
};

export default SaveAndExport;
