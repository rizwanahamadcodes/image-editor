import { SectionTitle } from "@/components/Section/Section";
import { pathConstants } from "@/routes/pathContants";
import NavMenuWithTabIndicator from "../Navbar/NavMenuWithTabIndicator";

type SidebarProps = {};

const sidebarNavLinks = [
    pathConstants.DASHBOARDPROJECTS,
    pathConstants.DASHBOARDLISTS,
];

const Sidebar = (props: SidebarProps) => {
    const {} = props;

    return (
        <aside className="w-20 border-r border-r-gray-200 flex flex-col">
            <div className="p-1">
                <SectionTitle>Dashboard</SectionTitle>
            </div>
            <div className="grow flex flex-col justify-center">
                <NavMenuWithTabIndicator
                    className="self"
                    navLinks={sidebarNavLinks}
                    direction="vertical"
                />
            </div>
        </aside>
    );
};

export default Sidebar;
