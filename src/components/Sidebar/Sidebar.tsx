import Section, { SectionTitle } from "@/components/Section/Section";
import { pathConstants } from "@/routes/pathContants";
import NavMenuWithTabIndicator from "../Navbar/NavMenuWithTabIndicator";
import Container, { FullWidthContainer } from "@/components/Container";

type SidebarProps = {};

const sidebarNavLinks = [
    pathConstants.DASHBOARDPROJECTS,
    pathConstants.DASHBOARDLISTS,
];

const Sidebar = (props: SidebarProps) => {
    const {} = props;

    return (
        <aside className="w-16 border-r shrink-0 border-r-gray-200 flex flex-col">
            <Section>
                <FullWidthContainer>
                    <SectionTitle>Dashboard</SectionTitle>
                </FullWidthContainer>
            </Section>
            <div className="grow flex flex-col">
                <NavMenuWithTabIndicator
                    navLinks={sidebarNavLinks}
                    direction="vertical"
                />
            </div>
        </aside>
    );
};

export default Sidebar;
