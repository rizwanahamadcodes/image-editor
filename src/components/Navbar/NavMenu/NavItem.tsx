import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = LinkProps & {
    children: string;
};

const NavItem = (props: NavItemProps) => {
    const { children, ...otherProps } = props;
    const isActive = otherProps.href === usePathname();

    return (
        <Link
            className={clsx(
                "flex h-navHeight font-semibold uppercase text-0.875 items-center px-1 border-b-2 tracking-widest",
                isActive
                    ? "text-primary-800 bg-primary/10 border-b-primary hover:bg-primary/15"
                    : "text-gray-500 hover:text-gray-700 border-b-transparent hover:bg-black/5"
            )}
            {...otherProps}>
            {children}
        </Link>
    );
};

export default NavItem;
