import DashboardLayout from "@/Layouts/DashboardLayout";
import Container from "@/components/Container";
import Section, { SectionTitle } from "@/components/Section/Section";

type DashboardProjectsProps = {};

const DashboardProjects = (props: DashboardProjectsProps) => {
    const {} = props;

    return (
        <Section>
            <Container>
                <SectionTitle>All Projects</SectionTitle>
            </Container>
        </Section>
    );
};

DashboardProjects.getLayout = DashboardLayout;

export default DashboardProjects;
