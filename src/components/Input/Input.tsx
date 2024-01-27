import { IoAlertCircle } from "react-icons/io5";
import clsx from "clsx";
import React from "react";
import { FieldError, FieldErrors } from "react-hook-form";

type InputProps = React.ComponentPropsWithoutRef<"input"> & {
    error?: FieldError;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { className, error, ...otherProps } = props;

    return (
        <input
            ref={ref}
            className={clsx(
                "h-2 border focus:outline-none px-0.5 rounded-0.5 w-full min-w-0 focus:ring focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-white  hover:bg-gray-50",
                error
                    ? "border-red-600 hover:border-red-700"
                    : " border-gray-200 hover:border-gray-300",
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

type InputFeedbackProps = {
    error?: FieldError;
};

export const InputFeedback = (props: InputFeedbackProps) => {
    const { error } = props;

    if (!error) {
        return null;
    }

    return (
        <div className="flex gap-0.5 items-center font-medium text-red-600">
            <IoAlertCircle />
            <p className="text-0.875">{error.message}</p>
        </div>
    );
};
