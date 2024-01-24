import clsx from "clsx";
import { IconBaseProps, IconType } from "react-icons";
import { MdBolt } from "react-icons/md";

type Colors = "gray-500" | "primary" | "white" | "gray-200";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
    variant?: "outline" | "solid";
    colorScheme?: Colors;
    active?: boolean;
    regular?: boolean;
    btnRef?: React.MutableRefObject<HTMLButtonElement | null>;
};

const Button = (props: ButtonProps) => {
    const {
        variant = "solid",
        colorScheme = "white",
        active = false,
        regular = false,
        className,
        children,
        btnRef,
        ...otherProps
    } = props;

    const baseClasses = `transition-all h-2 max-h-2 min-w-2 px-0.75 rounded-0.25 overflow-hidden flex flex-col gap-0.5 items-center justify-center focus:outline-none active:scale-95 font-medium ${
        regular ? "max-w-2" : ""
    }`;

    const baseVariantClasses: { [key: string]: string } = {
        solid: "",
        outline: "border",
    };
    const focusClasses: { [key: string]: string } = {
        primary: "focus:shadow-halo-primary",
        white: "focus:z-10",
        "gray-500": "focus:shadow-halo-gray-500",
        "gray-200":
            "focus:shadow-halo-gray-500  focus:text-gray-800 focus:border-gray-400 ",
    };

    const activeClasses: { [key: string]: string } = {
        "gray-200": "text-gray-800 bg-gray-100 border-gray-400",
        white: "text-gray-800 !bg-gray-100",
    };

    const styleClasses: { [key: string]: any } = {
        solid: {
            primary: "bg-primary text-white hover:bg-primary-600",
            "gray-500": "bg-gray-500 text-white hover:bg-gray-600",
            white: "bg-white text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:shadow-halo-gray-500",
        },
        outline: {
            primary: "border-primary text-primary",
            "gray-500": "",
            "gray-200":
                "border-gray-200 text-gray-600 hover:text-gray-800 hover:bg-gray-100 hover:border-gray-400",
        },
    };
    return (
        <button
            ref={btnRef}
            className={clsx(
                baseClasses,
                baseVariantClasses[variant],
                focusClasses[colorScheme],
                styleClasses[variant][colorScheme],
                active ? activeClasses[colorScheme] : null,
                className
            )}
            {...otherProps}>
            {children}
        </button>
    );
};

type ButtonGroupProps = {
    children?: React.ReactNode;
    className?: string;
};

export const ButtonGroup = (props: ButtonGroupProps) => {
    const { children, className } = props;

    return (
        <div
            className={clsx(
                "border border-gray-200 hover:border-gray-400 transition-all rounded-0.25 flex flex-row",
                className
            )}>
            {children}
        </div>
    );
};

type ButtonIconProps = IconBaseProps & {
    icon: IconType;
};

export const ButtonIcon = (props: ButtonIconProps) => {
    const { icon: Icon, className } = props;

    return <Icon className={clsx("text-1.25", className)} />;
};

export default Button;
