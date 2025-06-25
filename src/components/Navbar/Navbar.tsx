import BrandLogo from "@/components/BrandLogo/BrandLogo";
import { useToggle } from "@/hooks/useToggle";
import { PathConstant, pathConstants } from "@/routes/pathContants";
import { useRef } from "react";
import Container from "../Container";
import Drawer, { DrawerBody, DrawerDefaultHead } from "../Drawer/Drawer";
import Hamburger from "../Hamburger/Hamburger";
import NavMenu from "./NavMenu";
import { GoHome, GoHomeFill } from "react-icons/go";

type NavbarProps = {};

const navbarNavLinks: PathConstant[] = [
    { label: "Home", path: pathConstants.HOME.path },
    { label: "Projects", path: pathConstants.PROJECTS.path },
];

const Navbar = (props: NavbarProps) => {
    const {} = props;
    const { open, isOpen, close } = useToggle(false);
    const hamburgerRef = useRef<HTMLDivElement | null>(null);
    const navLinks: PathConstant[] = [
        {
            label: "Home",
            path: pathConstants.HOME.path,
            icon: GoHome,
            activeIcon: GoHomeFill,
        },
        {
            label: "Projects",
            path: pathConstants.PROJECTS.path,
            icon: GoHome,
            activeIcon: GoHomeFill,
        },
    ];

    return (
        <nav className="h-navHeight shrink-0">
            <Container className="flex justify-between h-full items-center gap-1">
                <BrandLogo />
                <NavMenu navLinks={navLinks} />
                <Drawer
                    open={open}
                    isOpen={isOpen}
                    close={close}
                    excludeElementRefs={[hamburgerRef]}
                    className="sm:hidden">
                    <DrawerDefaultHead />
                    <DrawerBody>
                        hello
                        {/* <NavMenuWithTabIndicator
                            navLinks={navbarNavLinks}
                            direction="vertical"
                        /> */}
                    </DrawerBody>
                </Drawer>
                <Hamburger
                    onClick={open}
                    hamburgerRef={hamburgerRef}
                    className="sm:hidden"
                />
            </Container>
        </nav>
    );
};

export default Navbar;
