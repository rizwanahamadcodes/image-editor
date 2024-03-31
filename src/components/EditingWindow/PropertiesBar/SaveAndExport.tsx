import Button, { ButtonIcon } from "@/components/Button/Button";
import { useActiveProject } from "@/context/useActiveProject";
import { useCanvas } from "@/context/useCanvas";
import { updateProject } from "@/store/slices/projectsSlice";
import { RootState } from "@/store/store";
import clsx from "clsx";
import { useEffect } from "react";
import { FaSave } from "react-icons/fa";
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

    useEffect(() => {
        dispatch(
            updateProject({
                project: activeProject,
                projectId: activeProject.projectId,
            })
        );
    }, [activeProject]);

    return (
        <div className={clsx("flex gap-1 flex-row", className)}>
            <Button
                variant="solid"
                colorScheme="primary"
                size="sm"
                onClick={saveProject}
                className="!w-full !sm:w-auto">
                <ButtonIcon icon={FaSave} />
            </Button>
            <Button
                variant="outline"
                colorScheme="primary"
                size="sm"
                className="!w-full !sm:w-auto">
                <ButtonIcon icon={PiUploadSimpleBold} />
            </Button>
        </div>
    );
};

export default SaveAndExport;
