import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { NavMenuProps } from "./NavMenu";
import { TabIndicatorBoundsType } from "../TabIndicator";
import {
    Dispatch,
    SetStateAction,
    useCallback,
    useEffect,
    useRef,
} from "react";

type NavItemProps = LinkProps & {
    children: React.ReactNode;
    direction?: NavMenuProps["direction"];
    setTabIndicatorBounds?: Dispatch<SetStateAction<TabIndicatorBoundsType>>;
};

const NavItem = (props: NavItemProps) => {
    const {
        children,
        setTabIndicatorBounds,
        direction = "horizontal",
        href,
        ...otherProps
    } = props;
    const isLinkActive = usePathname() === href;
    const navItemRef = useRef<HTMLAnchorElement | null>(null);

    const setTabIndicatorBoundsFromElement = useCallback(
        (el: HTMLElement) => {
            setTabIndicatorBounds &&
                setTabIndicatorBounds({
                    height: el.clientHeight,
                    width: el.clientWidth,
                    left: el.offsetLeft,
                    top: el.offsetTop,
                });
        },
        [setTabIndicatorBounds]
    );

    useEffect(() => {
        const navItem = navItemRef.current;
        if (!navItem) {
            return;
        }

        if (navItemRef.current)
            if (isLinkActive) {
                setTabIndicatorBoundsFromElement(navItem);
            }
    }, [isLinkActive, direction, navItemRef, setTabIndicatorBoundsFromElement]);

    const stylesAsPerDirection = {
        horizontal: "h-navHeight px-1.75",
        vertical: "h-4 pl-2",
    };

    const handleNavItemClick = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        const clickedNavLink = e.target as HTMLAnchorElement;
        setTabIndicatorBoundsFromElement(clickedNavLink);
    };

    return (
        <Link
            ref={navItemRef}
            onClick={(e) => {
                handleNavItemClick(e);
            }}
            href={href}
            {...otherProps}
            className={clsx(
                "flex items-center text-0.875 font-semibold uppercase tracking-widest transition-all",
                stylesAsPerDirection[direction],
                isLinkActive
                    ? "text-primary-600 hover:text-primary-800"
                    : "text-gray-500 hover:text-gray-700"
            )}>
            {children}
        </Link>
    );
};

export default NavItem;
