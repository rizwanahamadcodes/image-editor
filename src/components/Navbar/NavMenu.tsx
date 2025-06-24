import { PathConstant } from "@/routes/pathContants";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavMenuProps = {
    navLinks: PathConstant[];
    className?: string;
    direction?: "horizontal" | "vertical";
};

const NavMenu = (props: NavMenuProps) => {
    const { navLinks, direction = "horizontal", className } = props;
    const pathname = usePathname();

    const stylesAsPerDirection = {
        horizontal: "flex-row gap-x-1",
        vertical: "flex-col",
    };

    return (
        <ul
            className={clsx(
                "flex",
                stylesAsPerDirection[direction],
                className
            )}>
            {navLinks.map((navLink) => {
                return (
                    <li key={navLink.path}>
                        <Link
                            href={navLink.path}
                            className={clsx(
                                "flex h-2.75 px-1.375 rounded-full items-center text-0.875 font-medium capitalize transition-all",
                                stylesAsPerDirection[direction],
                                navLink.path === pathname
                                    ? "text-primary-600 bg-primary-100"
                                    : "text-gray-500 hover:text-gray-500 hover:bg-gray-100"
                            )}>
                            {navLink.label}
                        </Link>
                        {/* <NavItem
                            setTabIndicatorBounds={setTabIndicatorBounds}
                            direction={direction}
                            href={navLink.path}>
                            {navLink.label}
                        </NavItem> */}
                    </li>
                );
            })}
        </ul>
    );
};

export default NavMenu;
