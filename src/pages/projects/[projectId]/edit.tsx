import EditingWindow from "@/components/EditingWindow/EditingWindow";
import { ToolBox } from "@/components/ToolBox/ToolBox";
import { paramConstants } from "@/routes/pathContants";
import { selectProjectById } from "@/store/slices/projectsSlice";
import { RootState } from "@/store/store";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { ProjectContext } from "@/context/useCurrentProject";
import { useEffect, useState } from "react";
import { Project } from "@/data/projects";
import { CanvasContext } from "@/context/useCanvas";

const EditProject = () => {
    const router = useRouter();
    const projectIdString = router.query[paramConstants.PROJECTID] as string;
    const projectId = projectIdString ? parseInt(projectIdString) : undefined;

    const [project, setProject] = useState<Project | null>(null);

    const projectFromGlobalState = useSelector((state: RootState) => {
        return selectProjectById(state, projectId as number);
    });

    useEffect(() => {
        setProject(projectFromGlobalState);
    }, [projectFromGlobalState]);

    const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);

    if (!project) {
        return "The project was not found";
    }

    return (
        <CanvasContext.Provider
            value={{ canvas: canvas, setCanvas: setCanvas }}>
            <ProjectContext.Provider
                value={{ project: project, setProject: setProject }}>
                <div className="overflow-y-auto flex grow">
                    <ToolBox />
                    <EditingWindow />
                </div>
            </ProjectContext.Provider>
        </CanvasContext.Provider>
    );
};
export default EditProject;
