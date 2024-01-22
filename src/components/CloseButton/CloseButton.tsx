import clsx from "clsx";

type CloseButtonProps = React.ComponentPropsWithoutRef<"div"> & {
    size?: "sm" | "md" | "lg";
    colorScheme?: "primary" | "gray-300";
};

const CloseButton = (props: CloseButtonProps) => {
    const { onClick, size = "lg", colorScheme = "primary", className } = props;
    const sizeMap = {
        sm: "h-1 w-1",
        md: "h-1.25 w-1.25",
        lg: "h-1.75 w-1.75",
    };
    const colorSchemeMap = {
        primary: "bg-primary group-hover/closeButton:bg-primary-600",
        "gray-300": "bg-gray-300 group-hover/closeButton:bg-gray-500",
    };

    const barClasses = clsx(
        "absolute top-[50%] h-[2px] w-full translate-y-[-50%] rounded-full",
        colorSchemeMap[colorScheme]
    );
    return (
        <div
            className={clsx(
                "relative cursor-pointer flex flex-col justify-between group/closeButton",
                sizeMap[size],
                className
            )}
            onClick={onClick}>
            <span className={clsx(barClasses, "rotate-[45deg]")}></span>
            <span className={clsx(barClasses, "rotate-[405deg]")}></span>
            <span className={clsx(barClasses, "rotate-[-45deg]")}></span>
        </div>
    );
};

export default CloseButton;
