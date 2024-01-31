import BrandLogo from "@/components/BrandLogo/BrandLogo";
import Container from "@/components/Container";
import Drawer, {
    DrawerBody,
    DrawerDefaultHead,
} from "@/components/Drawer/Drawer";
import Hamburger from "@/components/Hamburger/Hamburger";
import NavMenuWithTabIndicator from "@/components/Navbar/NavMenuWithTabIndicator";
import SaveAndExport from "@/components/SaveAndExport/SaveAndExport";
import { useToggle } from "@/hooks/useToggle";
import { PathConstant, pathConstants } from "@/routes/pathContants";
import { useRef } from "react";

export const EditPageLayout = (page: React.ReactNode) => {
    const { open, isOpen, close } = useToggle(false);
    const hamburgerRef = useRef<HTMLDivElement | null>(null);

    return (
        <div className="h-[100dvh] relative flex flex-col overflow-auto">
            <nav className="h-navHeight shrink-0 border-b border-b-gray-100">
                <Container className="flex justify-between h-full items-center gap-1">
                    <BrandLogo />
                    <SaveAndExport className="hidden sm:flex" />

                    <Hamburger
                        onClick={open}
                        hamburgerRef={hamburgerRef}
                        className="sm:hidden"
                    />
                    <Drawer
                        open={open}
                        isOpen={isOpen}
                        close={close}
                        excludeElementRefs={[hamburgerRef]}
                        className="sm:hidden">
                        <DrawerDefaultHead />
                        <DrawerBody defaultPadding>
                            <SaveAndExport className="sm:hidden flex" />
                        </DrawerBody>
                    </Drawer>
                </Container>
            </nav>
            {page}
        </div>
    );
};
