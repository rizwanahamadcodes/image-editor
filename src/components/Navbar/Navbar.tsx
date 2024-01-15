import NavMenu from "./NavMenu/NavMenu";

type NavbarProps = {};

const Navbar = (props: NavbarProps) => {
    const {} = props;

    return (
        <div className="font-sans h-navHeight bg-white border-b border-b-gray-100">
            <NavMenu />
        </div>
    );
};

export default Navbar;
