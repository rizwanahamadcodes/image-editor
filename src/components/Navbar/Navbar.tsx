import Link from "next/link";
import Container from "../Container";
import User from "../User";
import NavMenuWithTabIndicator from "./NavMenuWithTabIndicator";
import { PathConstant, pathConstants } from "@/routes/pathContants";

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
                <Link
                    href="/"
                    className="text-primary font-bold text-1.25 hover:text-primary-600">
                    CardGen
                </Link>
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
