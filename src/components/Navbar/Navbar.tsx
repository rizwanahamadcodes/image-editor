import BrandLogo from "@/components/BrandLogo/BrandLogo";
import { useToggle } from "@/hooks/useToggle";
import { PathConstant, pathConstants } from "@/routes/pathContants";
import { useEffect, useRef } from "react";
import Container from "../Container";
import Drawer, { DrawerBody, DrawerDefaultHead } from "../Drawer/Drawer";
import Hamburger from "../Hamburger/Hamburger";
import NavMenu from "./NavMenu";
import { GoHome, GoHomeFill } from "react-icons/go";
import {
    PiProjectorScreenChart,
    PiProjectorScreenChartFill,
} from "react-icons/pi";
import { usePathname } from "next/navigation";

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
            icon: PiProjectorScreenChart,
            activeIcon: PiProjectorScreenChartFill,
        },
    ];

    const pathname = usePathname();

    useEffect(() => {
        close();
    }, [pathname]);

    return (
        <nav className="h-navHeight shrink-0">
            <Container className="flex justify-between h-full items-center gap-1">
                <BrandLogo />
                <NavMenu navLinks={navLinks} className="hidden sm:flex" />
                <Drawer
                    open={open}
                    isOpen={isOpen}
                    close={close}
                    excludeElementRefs={[hamburgerRef]}
                    className="sm:hidden">
                    <DrawerDefaultHead />
                    <DrawerBody className="p-1">
                        <NavMenu navLinks={navLinks} direction="vertical" />
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
