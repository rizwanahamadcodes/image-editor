import { projects } from "@/data/projects";
import { paramConstants } from "@/routes/pathContants";
import { useRouter } from "next/router";
import { FaList, FaRegImage } from "react-icons/fa6";
import { ProjectContext, useProject } from "./useProject";

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

type ToolBoxProps = {};

export const ToolBox = (props: ToolBoxProps) => {
    const {} = props;

    const project = useProject();
    console.log(project);

    return (
        <aside className="border-r flex border-r-gray-100 w-16 shrink-0">
            <ToolBar />
            <ToolProperties />
        </aside>
    );
};

type ToolBarProps = {};

export const ToolBar = (props: ToolBarProps) => {
    const {} = props;

    return (
        <nav className="bg-gray-100 w-4">
            <ul>
                <li className="text-0.625 flex flex-col items-center justify-center h-4 bg-whites font-semibold">
                    <FaRegImage className="text-1.625 text-gray-600" />
                    Templates
                </li>
                <li className="text-0.625 flex flex-col items-center justify-center h-4 bg-white font-semibold">
                    <FaList className="text-1.625 text-gray-600" />
                    Fields
                </li>
            </ul>
        </nav>
    );
};

type ToolPropertiesProps = {};

export const ToolProperties = (props: ToolPropertiesProps) => {
    const {} = props;

    return <div className="grow bg-white">Tool Properties</div>;
};

type OptionsBarProps = {};

export const OptionsBar = (props: OptionsBarProps) => {
    const {} = props;

    return <div className="border-b border-b-gray-100 h-3">Options bar</div>;
};

export default EditProject;
