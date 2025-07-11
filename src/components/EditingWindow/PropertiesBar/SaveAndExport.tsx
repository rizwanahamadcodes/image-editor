import Button, { ButtonIcon } from "@/components/Button/Button";
import PopOver from "@/components/PopOver/PopOver";
import { useActiveProject } from "@/context/useActiveProject";
import { useCanvas } from "@/context/useCanvas";
import { useToggle } from "@/hooks/useToggle";
import { updateProject } from "@/store/slices/projectsSlice";
import { useEffect, useRef } from "react";
import { FaSave } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
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
        const clonedCanvas = canvas?.clone((clone: any) => {
            const { version, objects, ...otherProperties } = JSON.parse(
                activeProject.canvas
            );
            const canvasHeight = otherProperties.height;
            const canvasWidth = otherProperties.width;
            clone.setHeight(canvasHeight);
            clone.setWidth(canvasWidth);

            const nowDate = new Date();

            const canvasPng = clone?.toDataURL({ format: "jpeg" });
            const link = document.createElement("a");
            link.download = `${activeProject.name}_${nowDate
                .getTime()
                .toString()}.jpeg`;
            if (canvasPng) {
                link.href = canvasPng;
            }
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
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
                <button
                    onClick={toggle}
                    ref={buttonRef}
                    className="h-3.25 text-gray-500 items-center flex justify-center rounded-0.5 flex-col w-full hover:text-gray-800 hover:bg-gray-100">
                    <ButtonIcon icon={HiBars3} />
                </button>
            </div>
        </>
    );
};

export default SaveAndExport;
