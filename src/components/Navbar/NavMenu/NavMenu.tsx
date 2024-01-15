import { PathConstant, pathConstants } from "@/routes/pathContants";
import NavItem from "./NavItem";
import clsx from "clsx";

type NavMenuProps = {
    className?: string;
};

const navLinks: PathConstant[] = [pathConstants.HOME, pathConstants.PROJECTS];

const NavMenu = (props: NavMenuProps) => {
    const { className } = props;

    return (
        <ul className={clsx("flex", className)}>
            {navLinks.map((navLink) => (
                <li key={navLink.path}>
                    <NavItem href={navLink.path}>{navLink.label}</NavItem>
                </li>
            ))}
        </ul>
    );
};

export default NavMenu;
