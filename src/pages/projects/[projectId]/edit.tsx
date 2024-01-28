import EditingWindow from "@/components/EditingWindow/EditingWindow";
import { ToolBox } from "@/components/ToolBox/ToolBox";
import { paramConstants } from "@/routes/pathContants";
import { selectProjectById } from "@/store/slices/projectsSlice";
import { RootState } from "@/store/store";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { ActiveProjectContext } from "@/context/useActiveProject";
import { useEffect, useState } from "react";
import { ActiveProject, Project } from "@/data/projects";
import { CanvasContext } from "@/context/useCanvas";
import { fabric } from "fabric";

const EditProject = () => {
    const router = useRouter();
    const projectIdString = router.query[paramConstants.PROJECTID] as string;
    const projectId = projectIdString ? parseInt(projectIdString) : undefined;

    const [activeProject, setActiveProject] = useState<ActiveProject | null>(
        null
    );
    const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);

    const projectFromGlobalState = useSelector((state: RootState) => {
        return selectProjectById(state, projectId as number);
    });

    useEffect(() => {
        if (!projectFromGlobalState) return;

        const canvasFromGlobalState = JSON.parse(projectFromGlobalState.canvas);

        const activeProject: ActiveProject = {
            canvasObjects: canvasFromGlobalState.canvasObjects,
            canvasProperties: canvasFromGlobalState.canvasProperties,
            images: canvasFromGlobalState.images,
            listId: canvasFromGlobalState.listId,
            thumbnailUrl: canvasFromGlobalState.thumbnailUrl,
        };

        setActiveProject(activeProject);
    }, [projectFromGlobalState]);

    if (!activeProject) {
        return "The project was not found";
    }

    return (
        <CanvasContext.Provider
            value={{ canvas: canvas, setCanvas: setCanvas }}>
            <ActiveProjectContext.Provider
                value={{
                    activeProject: activeProject,
                    setActiveProject: setActiveProject,
                }}>
                <div className="overflow-y-auto flex grow">
                    <ToolBox />
                    <EditingWindow />
                </div>
            </ActiveProjectContext.Provider>
        </CanvasContext.Provider>
    );
};
export default EditProject;
