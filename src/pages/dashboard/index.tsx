import DashboardLayout from "@/Layouts/DashboardLayout";
import Container from "@/components/Container";
import Section, { SectionTitle } from "@/components/Section/Section";

type DashboardProps = {};

const Dashboard = (props: DashboardProps) => {
    const {} = props;

    return (
        <Section>
            <Container>
                <SectionTitle>All Dashboard Items</SectionTitle>
            </Container>
        </Section>
    );
};

Dashboard.getLayout = DashboardLayout;

export default Dashboard;
