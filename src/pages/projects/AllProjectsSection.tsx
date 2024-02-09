import Button, { button } from "@/components/Button/Button";
import Container from "@/components/Container";
import CreateNewProjectModal from "@/components/Modals/CreateNewProjectModal";
import Section, { SectionTitle } from "@/components/Section/Section";
import { useCurrentUser } from "@/context/useCurrentUser";
import { Project, projects } from "@/data/projects";
import { useToggle } from "@/hooks/useToggle";
import { pathConstants } from "@/routes/pathContants";
import { selectAllProject } from "@/store/slices/projectsSlice";
import { RootState } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import { BiPlus } from "react-icons/bi";
import { useSelector } from "react-redux";

type AllProjectsSectionProps = {};

const AllProjectsSection = (props: AllProjectsSectionProps) => {
    const {} = props;
    const currentUser = useCurrentUser();

    const activeProjects = useSelector((state: RootState) =>
        selectAllProject(state)
    );

    const {
        open: openCreateNewProjectModal,
        close: closeCreateNewProjectModal,
        isOpen: isCreateNewProjectModalOpen,
    } = useToggle(false);

    return (
        <Section>
            <Container>
                {isCreateNewProjectModalOpen && (
                    <CreateNewProjectModal
                        open={openCreateNewProjectModal}
                        close={closeCreateNewProjectModal}
                        isOpen={isCreateNewProjectModalOpen}
                    />
                )}
                <SectionTitle>All Projects</SectionTitle>
                <div className="grid grid-cols gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    <AddNewProject onClick={openCreateNewProjectModal} />
                    {activeProjects.map((activeProject) => (
                        <ProjectCard
                            key={activeProject.projectId}
                            project={activeProject}
                        />
                    ))}
                </div>
            </Container>
        </Section>
    );
};

type AddNewProjectProps = React.ComponentPropsWithoutRef<"div">;

export const AddNewProject = (props: AddNewProjectProps) => {
    const { onClick } = props;

    return (
        <div
            className="border border-gray-100 rounded-0.5 p-1 bg-gray-50 flex items-center justify-center cursor-pointer hover:border-gray-400 hover:bg-gray-100 text-gray-550 transition-all group/addNewProjectGroup"
            onClick={onClick}>
            <BiPlus className="group-hover/addNewProjectGroup:text-gray-600 transition-all text-gray-500 text-2.75" />
        </div>
    );
};

type ProjectCardProps = {
    project: Project;
};

export const ProjectCard = (props: ProjectCardProps) => {
    const { project } = props;

    return (
        <div className="border border-gray-100 rounded-0.5 overflow-hidden h-15 relative group/projectCardGroup cursor-pointer">
            <Image
                src={
                    project.thumbnailUrl ??
                    "/images/projects/thumbnails/default_thumbnail.jpg"
                }
                alt={project.name}
                fill
                className="object-cover"
            />
            <div className="h-full w-full left-0 top-0 bg-black/20 z-1 absolute group-hover/projectCardGroup:bg-black/30 flex justify-end p-1.5 flex-col">
                <Link
                    title={project.name}
                    href={`${pathConstants.PROJECTS.path}/${project.projectId}/edit`}
                    className="overflow-hidden max-w-full overflow-ellipsis mb-0.5">
                    <h3 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-white font-medium text-1.125">
                        {project.name}
                    </h3>
                </Link>
                <Link
                    title={project.name}
                    href={`${pathConstants.PROJECTS.path}/${project.projectId}/edit`}
                    className={button({
                        variant: "solid",
                        colorScheme: "white",
                        className: "px-1 self-start inline-block",
                        size: "sm",
                    })}>
                    Edit
                </Link>
            </div>
        </div>
    );
};

export default AllProjectsSection;
