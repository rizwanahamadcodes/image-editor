import { Dispatch, SetStateAction } from "react";
import { TabIndicatorBoundsType } from "../TabIndicator";
import NavItem from "./NavItem";
import clsx from "clsx";
import { PathConstant, pathConstants } from "@/routes/pathContants";

export type NavMenuProps = {
    className?: string;
    direction?: "horizontal" | "vertical";
    setTabIndicatorBounds?: Dispatch<SetStateAction<TabIndicatorBoundsType>>;
};

const navLinks: PathConstant[] = [pathConstants.HOME, pathConstants.PROJECTS];

const NavMenu = (props: NavMenuProps) => {
    const {
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
