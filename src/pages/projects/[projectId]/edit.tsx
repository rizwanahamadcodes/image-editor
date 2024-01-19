import Canvas from "@/components/Canvas/Canvas";
import { OptionsBar } from "@/components/OptionsBar/OptionsBar";
import { ToolBox } from "@/components/ToolBox/ToolBox";
import { paramConstants } from "@/routes/pathContants";
import { selectProjectById } from "@/store/slices/projectsSlice";
import { RootState } from "@/store/store";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { ProjectContext } from "./useCurrentProject";
import EditingWindow from "@/components/EditingWIndow/EditingWindow";

type EditProjectProps = {};

const EditProject = (props: EditProjectProps) => {
    const {} = props;
    const router = useRouter();
    const projectIdString = router.query[paramConstants.PROJECTID] as string;
    const projectId = projectIdString ? parseInt(projectIdString) : undefined;

    const project = useSelector((state: RootState) => {
        return selectProjectById(state, projectId as number);
    });

    if (!project) {
        return "The project was not found";
    }

    return (
        <ProjectContext.Provider value={project}>
            <div className="flex grow">
                <ToolBox />
                <EditingWindow />
            </div>
        </ProjectContext.Provider>
    );
};
export default EditProject;
