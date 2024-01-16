import DashboardLayout from "@/Layouts/DashboardLayout";
import Container, { FullWidthContainer } from "@/components/Container";
import Section, { SectionTitle } from "@/components/Section/Section";

type DashboardProps = {};

const Dashboard = (props: DashboardProps) => {
    const {} = props;

    return (
        <Section>
            <FullWidthContainer>
                <SectionTitle>All Dashboard Items</SectionTitle>
            </FullWidthContainer>
        </Section>
    );
};

Dashboard.getLayout = DashboardLayout;

export default Dashboard;
