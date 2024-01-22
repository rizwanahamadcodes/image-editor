import Link from "next/link";
import Container from "../Container";
import User from "../User";
import NavMenuWithTabIndicator from "./NavMenuWithTabIndicator";
import { PathConstant, pathConstants } from "@/routes/pathContants";
import BrandLogo from "@/components/BrandLogo/BrandLogo";

type NavbarProps = {};

const navbarNavLinks: PathConstant[] = [
    { label: "H", path: pathConstants.HOME.path },
    { label: "D", path: pathConstants.DASHBOARD.path },
];

const Navbar = (props: NavbarProps) => {
    const {} = props;

    return (
        <nav className="h-navHeight border-b border-b-gray-100">
            <Container className="flex justify-between items-center gap-1">
                <BrandLogo />
                <NavMenuWithTabIndicator
                    navLinks={navbarNavLinks}
                    className="ml-auto"
                />
                <User />
            </Container>
        </nav>
    );
};

export default Navbar;
