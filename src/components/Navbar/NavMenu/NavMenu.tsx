import NavItem from "./NavItem";

type NavMenuProps = {};

const navLinks = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Lists", path: "/lists" },
    { label: "Design", path: "/design" },
];

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
