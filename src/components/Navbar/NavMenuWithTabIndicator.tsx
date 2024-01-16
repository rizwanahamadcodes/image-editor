import clsx from "clsx";
import NavMenu, { NavMenuProps } from "./NavMenu/NavMenu";
import TabIndicator, { useTabIndicator } from "./TabIndicator";
import { PathConstant } from "@/routes/pathContants";

type NavMenuWithTabIndicatorProps = {
    navLinks: PathConstant[];
    className?: string;
    direction?: NavMenuProps["direction"];
};

const NavMenuWithTabIndicator = (props: NavMenuWithTabIndicatorProps) => {
    const { navLinks, direction = "horizontal", className } = props;
    const { tabIndicatorBounds, setTabIndicatorBounds } = useTabIndicator({
        top: 0,
        left: 0,
        height: 16 * 4,
        width: 100,
    });

    return (
        <div className={clsx("relative", className)}>
            <NavMenu
                navLinks={navLinks}
                direction={direction}
                setTabIndicatorBounds={setTabIndicatorBounds}
            />
            <TabIndicator
                direction={direction}
                tabIndicatorBounds={tabIndicatorBounds}
            />
        </div>
    );
};

export default NavMenuWithTabIndicator;
