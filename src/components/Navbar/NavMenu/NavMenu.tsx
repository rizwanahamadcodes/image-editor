import { Dispatch, SetStateAction } from "react";
import { TabIndicatorBoundsType } from "../TabIndicator";
import NavItem from "./NavItem";
import clsx from "clsx";
import { PathConstant, pathConstants } from "@/routes/pathContants";

export type NavMenuProps = {
    navLinks: PathConstant[];
    className?: string;
    direction?: "horizontal" | "vertical";
    setTabIndicatorBounds?: Dispatch<SetStateAction<TabIndicatorBoundsType>>;
};

const NavMenu = (props: NavMenuProps) => {
    const {
        navLinks,
        direction = "horizontal",
        className,
        setTabIndicatorBounds,
    } = props;

    const stylesAsPerDirection = {
        horizontal: "flex-row",
        vertical: "flex-col",
    };

    return (
        <ul
            className={clsx(
                "flex",
                stylesAsPerDirection[direction],
                className
            )}>
            {navLinks.map((navLink) => {
                return (
                    <li key={navLink.path}>
                        <NavItem
                            setTabIndicatorBounds={setTabIndicatorBounds}
                            direction={direction}
                            href={navLink.path}>
                            {navLink.label}
                        </NavItem>
                    </li>
                );
            })}
        </ul>
    );
};

export default NavMenu;
