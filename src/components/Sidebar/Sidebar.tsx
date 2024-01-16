import { pathConstants } from "@/routes/pathContants";
import NavMenu from "../Navbar/NavMenu/NavMenu";
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
            <h2 className="font-medium text-gray-800 m-1">Dashboard</h2>
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
