import { PathConstant } from "@/routes/pathContants";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

export type NavMenuProps = {
    navLinks: PathConstant[];
    className?: string;
    direction?: "horizontal" | "vertical";
};

const NavMenu = (props: NavMenuProps) => {
    const { navLinks, direction = "horizontal", className } = props;
    const pathname = usePathname();

    const stylesAsPerDirection = {
        horizontal: "flex-row gap-x-0.5",
        vertical: "flex-col gap-y-0.5",
    };

    return (
        <ul
            className={clsx(
                "flex",
                stylesAsPerDirection[direction],
                className
            )}>
            {navLinks.map(({ path, label, icon, activeIcon }) => {
                const isActive = path === pathname;
                return (
                    <li key={path}>
                        <Link
                            href={path}
                            className={clsx(
                                "flex h-2.75 px-1.375 rounded-full items-center text-0.875 font-medium capitalize gap-0.5 transition-all duration-300",
                                isActive
                                    ? "text-primary-600 bg-primary-100"
                                    : "text-gray-500 hover:text-gray-500 hover:bg-gray-100"
                            )}>
                            <NavIcon
                                isActive={isActive}
                                icon={icon}
                                activeIcon={activeIcon}
                            />
                            {label}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default NavMenu;

interface NavIconProps {
    isActive: boolean;
    icon?: IconType;
    activeIcon?: IconType;
}

export const NavIcon: React.FC<NavIconProps> = ({
    isActive,
    icon: Icon,
    activeIcon: ActiveIcon,
}) => {
    if (isActive && ActiveIcon) {
        return <ActiveIcon className="text-1.25" />;
    }

    if (!isActive && Icon) {
        return <Icon className="text-1.25" />;
    }

    return null;
};
