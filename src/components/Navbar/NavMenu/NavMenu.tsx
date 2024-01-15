import { PathConstant, pathConstants } from "@/routes/pathContants";
import NavItem from "./NavItem";

type NavMenuProps = {};

const navLinks: PathConstant[] = [pathConstants.HOME];

const NavMenu = (props: NavMenuProps) => {
    const {} = props;

    return (
        <ul className="flex">
            {navLinks.map((navLink) => (
                <li key={navLink.path}>
                    <NavItem href={navLink.path}>{navLink.label}</NavItem>
                </li>
            ))}
        </ul>
    );
};

export default NavMenu;
