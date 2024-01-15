import Layout from "@/Layouts/Layout";
import { NextPageWithLayout } from "../_app";
import ProjectsListsLayout from "@/Layouts/ProjectsListsLayout";

type ProjectsProps = {};

const Projects: NextPageWithLayout = (props: ProjectsProps) => {
    const {} = props;

    return <div>Projects</div>;
};

Projects.getLayout = ProjectsListsLayout;

export default Projects;
