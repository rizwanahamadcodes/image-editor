import Container, { FullWidthContainer } from "@/components/Container";
import Section, { SectionTitle } from "@/components/Section/Section";
import { Project, projects } from "@/data/projects";
import { useCurrentUser } from "@/context/useCurrentUser";
import { pathConstants } from "@/routes/pathContants";
import Image from "next/image";
import Link from "next/link";
import { BiPlus } from "react-icons/bi";

type DashboardProjectsProps = {};

const DashboardProjects = (props: DashboardProjectsProps) => {
    const {} = props;
    const currentUser = useCurrentUser();

    const activeProjects = projects.filter(
        (project) => project.userId === currentUser.userId
    );

    console.log(activeProjects);

    return (
        <Section>
            <FullWidthContainer>
                <SectionTitle>All Projects</SectionTitle>

                <div className="grid grid-cols gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    <AddNewProject />
                    {activeProjects.map((activeProject) => (
                        <ProjectCard
                            key={activeProject.projectId}
                            project={activeProject}
                        />
                    ))}
                </div>
            </FullWidthContainer>
        </Section>
    );
};

type ProjectCardProps = {
    project: Project;
};

export const ProjectCard = (props: ProjectCardProps) => {
    const { project } = props;

    return (
        <div className="border border-gray-100 rounded-0.5 overflow-hidden h-15">
            <div className="h-7 relative mb-1">
                <Image
                    src={project.thumbnailUrl}
                    alt={project.name}
                    fill
                    className="object-cover"
                />
            </div>
            <Link
                title={project.name}
                href={`${pathConstants.PROJECTS.path}/${project.projectId}`}
                className="inline-block px-1 overflow-hidden max-w-full overflow-ellipsis">
                <h3 className="overflow-hidden overflow-ellipsis whitespace-nowrap font-semibold">
                    {project.name}
                </h3>
            </Link>
        </div>
    );
};

type AddNewProjectProps = {};

export const AddNewProject = (props: AddNewProjectProps) => {
    const {} = props;

    return (
        <div className="border border-gray-100 rounded-0.5 p-1 bg-gray-50 flex items-center justify-center cursor-pointer hover:border-gray-400 hover:bg-gray-100 text-gray-550 transition-all group/addNewProjectGroup">
            <BiPlus className="group-hover/addNewProjectGroup:text-gray-600 transition-all text-gray-500 text-2.75" />
        </div>
    );
};

export default DashboardProjects;
