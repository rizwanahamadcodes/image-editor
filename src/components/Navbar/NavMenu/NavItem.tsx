import Link, { LinkProps } from "next/link";

type NavItemProps = LinkProps & {
    children: string;
};

const NavItem = (props: NavItemProps) => {
    const { children, ...otherProps } = props;

    return <Link {...otherProps}>{children}</Link>;
};

export default NavItem;
