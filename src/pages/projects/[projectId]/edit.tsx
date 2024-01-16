import { ToolBox } from "@/components/ToolBox/ToolBox";
import { projects } from "@/data/projects";
import { paramConstants } from "@/routes/pathContants";
import { useRouter } from "next/router";
import { ProjectContext } from "./useProject";
import { OptionsBar } from "@/components/OptionsBar/OptionsBar";

type EditProjectProps = {};

const EditProject = (props: EditProjectProps) => {
    const {} = props;
    const router = useRouter();
    const projectIdString = router.query[paramConstants.PROJECTID] as string;
    const projectId = projectIdString ? parseInt(projectIdString) : undefined;

    const project = projects.find((project) => project.projectId === projectId);

    if (!project) {
        return "The project was not found";
    }

    return (
        <ProjectContext.Provider value={project}>
            <div className="flex grow">
                <ToolBox />
                <main className="flex grow flex-col">
                    <OptionsBar />
                    <section className="grow">Canvas</section>
                </main>
            </div>
        </ProjectContext.Provider>
    );
};
export default EditProject;
