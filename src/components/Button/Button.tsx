import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import { IconType } from "react-icons";

export const button = cva(
    [
        "font-medium focus:outline-none items-center active:scale-95 flex gap-0.75 focus:ring focus:ring-offset-2 focus:ring-offset-white focus:ring-primary/50 rounded-0.375 justify-center",
    ],
    {
        variants: {
            variant: {
                solid: "shadow hover:shadow-md",
                outline: "border",
                ghost: "",
            },
            colorScheme: {
                primary: "",
                "gray-200": "",
                "gray-900": "",
                white: "",
            },
            size: {
                sm: "h-2",
                md: "h-3",
                lg: "h-4",
            },
            regular: {
                true: "",
                false: "",
            },
            active: {
                true: "",
                false: "",
            },
        },

        compoundVariants: [
            { size: "sm", regular: true, className: "w-2" },
            { size: "md", regular: true, className: "w-3" },
            { size: "lg", regular: true, className: "w-4" },
            { size: "sm", regular: false, className: "px-1" },
            { size: "md", regular: false, className: "px-1.5" },
            { size: "lg", regular: false, className: "px-2" },
            {
                variant: "outline",
                colorScheme: "gray-200",
                className:
                    "text-gray-500 border-gray-200 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700",
            },
            {
                variant: "solid",
                colorScheme: "gray-900",
                className: "bg-gray-900 text-gray-100 hover:bg-gray-950",
            },
            {
                variant: "solid",
                colorScheme: "white",
                className:
                    "bg-white text-gray-900 hover:bg-gray-50 hover:text-gray-950 font-semibold",
            },
            {
                variant: "solid",
                colorScheme: "primary",
                className: "bg-primary text-white hover:bg-primary-600",
            },
            {
                variant: "outline",
                colorScheme: "primary",
                className:
                    "text-primary border-primary hover:border-primary-600 hover:text-primary-600",
            },
            {
                variant: "ghost",
                colorScheme: "gray-900",
                className: "hover:bg-gray-50 text-gray-900 hover:text-gray-950",
            },
            {
                variant: "ghost",
                colorScheme: "gray-200",
                className: "hover:bg-gray-50 text-gray-500 hover:text-gray-700",
            },
            {
                active: true,
                colorScheme: "gray-200",
                className: "bg-gray-100 border-gray-300 text-gray-700",
            },
        ],

        defaultVariants: {},
    }
);

type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
    VariantProps<typeof button> & {
        buttonRef?: React.MutableRefObject<HTMLButtonElement | null>;
        children?: React.ReactNode;
        className?: string;
    };

export const Button = (props: ButtonProps) => {
    const {
        children,
        variant,
        colorScheme,
        size,
        regular = false,
        active = false,
        className,
        buttonRef,
        ...otherProps
    } = props;

    return (
        <button
            className={clsx(
                button({ variant, colorScheme, size, regular, active }),
                className
            )}
            ref={buttonRef}
            {...otherProps}>
            {children}
        </button>
    );
};
export default Button;

type ButtonIconProps = React.ComponentPropsWithoutRef<IconType> & {
    icon: IconType;
    className?: string;
};

export const ButtonIcon = (props: ButtonIconProps) => {
    const { icon: Icon, className, ...otherProps } = props;

    return <Icon className={clsx("text-1.25", className)} {...otherProps} />;
};
