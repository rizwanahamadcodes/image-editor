import clsx from "clsx";
import React from "react";

type InputProps = React.ComponentPropsWithoutRef<"input">;

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { className, ...otherProps } = props;

    return (
        <input
            ref={ref}
            className={clsx(
                "h-2 border border-gray-200 focus:outline-none px-0.5 rounded-0.5 w-full min-w-0 focus:ring focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-white hover:border-gray-300 hover:bg-gray-50",
                className
            )}
            {...otherProps}
        />
    );
});

Input.displayName = "Input";

export default Input;

type LabelProps = React.ComponentPropsWithoutRef<"label">;

export const Label = (props: LabelProps) => {
    const { children, className, ...otherProps } = props;

    return (
        <label
            className={clsx("font-medium text-gray-800", className)}
            {...otherProps}>
            {children}
        </label>
    );
};

type InputControlProps = React.ComponentPropsWithoutRef<"div">;

export const InputControl = (props: InputControlProps) => {
    const { children, className, ...otherProps } = props;

    return (
        <div
            className={clsx("flex flex-col gap-0.5", className)}
            {...otherProps}>
            {children}
        </div>
    );
};
