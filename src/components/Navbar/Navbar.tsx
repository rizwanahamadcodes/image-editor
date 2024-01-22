import Link from "next/link";
import Container from "../Container";
import User from "../User";
import NavMenuWithTabIndicator from "./NavMenuWithTabIndicator";
import { PathConstant, pathConstants } from "@/routes/pathContants";
import BrandLogo from "@/components/BrandLogo/BrandLogo";
import Hamburger from "../Hamburger/Hamburger";
import Drawer, { DrawerBody, DrawerDefaultHead } from "../Drawer/Drawer";
import { useToggle } from "@/hooks/useToggle";
import { useRef } from "react";

type NavbarProps = {};

const navbarNavLinks: PathConstant[] = [
    { label: "H", path: pathConstants.HOME.path },
    { label: "D", path: pathConstants.DASHBOARD.path },
];

const Navbar = (props: NavbarProps) => {
    const {} = props;
    const { open, isOpen, close } = useToggle(true);
    const hamburgerRef = useRef<HTMLDivElement | null>(null);

    return (
        <nav className="h-navHeight border-b border-b-gray-100">
            <Container className="flex justify-between h-full items-center gap-1">
                <BrandLogo />
                <NavMenuWithTabIndicator
                    navLinks={navbarNavLinks}
                    className="ml-auto hidden sm:flex"
                />
                <User />
                <Drawer
                    open={open}
                    isOpen={isOpen}
                    close={close}
                    excludeElementRefs={[hamburgerRef]}
                    className="sm:hidden">
                    <DrawerDefaultHead />
                    <DrawerBody>
                        <NavMenuWithTabIndicator
                            navLinks={navbarNavLinks}
                            direction="vertical"
                        />
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
