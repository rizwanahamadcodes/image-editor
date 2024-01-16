import DashboardLayout from "@/Layouts/DashboardLayout";
import { FullWidthContainer } from "@/components/Container";
import Section, { SectionTitle } from "@/components/Section/Section";
import { projects } from "@/data/projects";
import { paramConstants, pathConstants } from "@/routes/pathContants";
import Link from "next/link";
import { useRouter } from "next/router";

type ProjectDetailsProps = {};

const ProjectDetails = (props: ProjectDetailsProps) => {
    const {} = props;
    const router = useRouter();
    const projectIdString = router.query[paramConstants.PROJECTID] as string;

    const projectId = projectIdString ? parseInt(projectIdString) : undefined;

    const project = projects.find((project) => project.projectId === projectId);

    if (!project) {
        return (
            <Section>
                <FullWidthContainer>
                    <SectionTitle>The project was not found</SectionTitle>
                </FullWidthContainer>
            </Section>
        );
    }

    return (
        <Section>
            <FullWidthContainer>
                <SectionTitle>{project.name}</SectionTitle>

                <Link
                    href={`${pathConstants.PROJECTS.path}/${project.projectId}/edit`}>
                    Edit
                </Link>
            </FullWidthContainer>
        </Section>
    );
};

ProjectDetails.getLayout = DashboardLayout;

export default ProjectDetails;
