import EditingWindow from "@/components/EditingWindow/EditingWindow";
import { ToolBox } from "@/components/ToolBox/ToolBox";
import { ActiveProjectContext } from "@/context/useActiveProject";
import { CanvasContext } from "@/context/useCanvas";
import { Project } from "@/data/projects";
import { EditPageLayout } from "@/layouts/EditPageLayout";
import { paramConstants } from "@/routes/pathContants";
import { selectProjectById } from "@/store/slices/projectsSlice";
import { RootState } from "@/store/store";
import { fabric } from "fabric";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const EditProject = () => {
    const router = useRouter();
    const projectIdString = router.query[paramConstants.PROJECTID] as string;
    const projectId = projectIdString ? parseInt(projectIdString) : undefined;

    const [activeProject, setActiveProject] = useState<Project | null>(null);
    const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);

    const projectFromGlobalState = useSelector((state: RootState) => {
        return selectProjectById(state, projectId as number);
    });

    useEffect(() => {
        if (!projectFromGlobalState) return;

        setActiveProject(projectFromGlobalState);
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
                <div className="overflow-y-auto flex grow gap-0.5 p-0.5 bg-gray-100">
                    <ToolBox />
                    <EditingWindow />
                </div>
            </ActiveProjectContext.Provider>
        </CanvasContext.Provider>
    );
};

EditProject.getLayout = EditPageLayout;

export default EditProject;
