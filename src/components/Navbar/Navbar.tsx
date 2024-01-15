import Link from "next/link";
import Container from "../Container";
import NavMenu from "./NavMenu/NavMenu";

type NavbarProps = {};

const Navbar = (props: NavbarProps) => {
    const {} = props;

    return (
        <div className="h-navHeight border-b border-b-gray-100">
            <Container>
                <Link href="/">CardGen</Link>
                <NavMenu />
            </Container>
        </div>
    );
};

export default Navbar;
