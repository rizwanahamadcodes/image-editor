import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import { IconType } from "react-icons";

export const button = cva(
    [
        "font-medium transition-all focus:outline-none items-center active:scale-95 flex gap-0.75 focus:ring focus:ring-offset-2 focus:ring-offset-white focus:ring-primary/50 rounded-0.25 justify-center",
    ],
    {
        variants: {
            variant: {
                solid: "",
                outline: "border",
                ghost: "",
            },
            colorScheme: {
                primary: "",
                "gray-200": "",
                "gray-900": "",
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
            {
                variant: "outline",
                colorScheme: "gray-200",
                className:
                    "text-gray-500 border-gray-200 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700",
            },
        ],

        defaultVariants: {
            variant: "solid",
            colorScheme: "primary",
            size: "md",
        },
    }
);

type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
    VariantProps<typeof button> & {
        buttonRef: React.MutableRefObject<HTMLButtonElement | null>;
        children?: React.ReactNode;
        className?: string;
    };

export const Button = (props: ButtonProps) => {
    const {
        children,
        variant,
        colorScheme,
        size,
        regular,
        active,
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

type ButtonIconProps = React.ComponentPropsWithoutRef<IconType> & {
    icon: IconType;
    className?: string;
};

export const ButtonIcon = (props: ButtonIconProps) => {
    const { icon: Icon, className, ...otherProps } = props;

    return <Icon className={clsx("text-1.25", className)} {...otherProps} />;
};

export default Button;
