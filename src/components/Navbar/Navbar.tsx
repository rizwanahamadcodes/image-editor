import Link from "next/link";
import Container from "../Container";
import User from "../User";
import NavMenuWithTabIndicator from "./NavMenuWithTabIndicator";

type NavbarProps = {};

const Navbar = (props: NavbarProps) => {
    const {} = props;

    return (
        <div className="h-navHeight border-b border-b-gray-100">
            <Container className="flex justify-between items-center gap-1">
                <Link
                    href="/"
                    className="text-primary font-bold text-1.25 hover:text-primary-600">
                    CardGen
                </Link>
                <NavMenuWithTabIndicator className="ml-auto" />
                <User />
            </Container>
        </div>
    );
};

export default Navbar;
