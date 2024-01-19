import EditingWindow from "@/components/EditingWindow/EditingWindow";
import { ToolBox } from "@/components/ToolBox/ToolBox";
import { paramConstants } from "@/routes/pathContants";
import { selectProjectById } from "@/store/slices/projectsSlice";
import { RootState } from "@/store/store";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { ProjectContext } from "@/context/useCurrentProject";

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
            <div className="overflow-y-auto flex grow">
                <ToolBox />
                <EditingWindow />
            </div>
        </ProjectContext.Provider>
    );
};
export default EditProject;
