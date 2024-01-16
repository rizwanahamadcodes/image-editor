import DashboardLayout from "@/Layouts/DashboardLayout";
import Container from "@/components/Container";
import Section, { SectionTitle } from "@/components/Section/Section";

type DashboardListsProps = {};

const DashboardLists = (props: DashboardListsProps) => {
    const {} = props;

    return (
        <Section>
            <Container>
                <SectionTitle>All lists</SectionTitle>
            </Container>
        </Section>
    );
};

DashboardLists.getLayout = DashboardLayout;

export default DashboardLists;
