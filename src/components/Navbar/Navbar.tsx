import Link from "next/link";
import Container from "../Container";
import NavMenu from "./NavMenu/NavMenu";
import User from "../User";

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
                <NavMenu className="ml-auto" />
                <User />
            </Container>
        </div>
    );
};

export default Navbar;
