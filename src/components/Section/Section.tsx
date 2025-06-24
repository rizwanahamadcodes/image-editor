import clsx from "clsx";
import { ComponentPropsWithRef } from "react";

type SectionProps = ComponentPropsWithRef<"section">;

const Section = (props: SectionProps) => {
    const { className, children, ...otherProps } = props;

    return (
        <section {...otherProps} className={clsx("py-1", className)}>
            {children}
        </section>
    );
};

type SectionTitleProps = ComponentPropsWithRef<"h2"> & {
    defaultBottomMargin?: boolean;
};

export const SectionTitle = (props: SectionTitleProps) => {
    const { children, defaultBottomMargin = true, ...otherProps } = props;

    return (
        <h2
            {...otherProps}
            className={clsx(
                "font-medium text-1.125 text-gray-800",
                defaultBottomMargin ? "mb-1" : ""
            )}>
            {children}
        </h2>
    );
};
export const PageHeading = (props: SectionTitleProps) => {
    const { children, defaultBottomMargin = true, ...otherProps } = props;

    return (
        <h2
            {...otherProps}
            className={clsx(
                "text-4.5 leading-1 font-thin text-primary",
                defaultBottomMargin ? "mb-1" : ""
            )}>
            {children}
        </h2>
    );
};
export const PageSubHeading = (props: SectionTitleProps) => {
    const { children, defaultBottomMargin = true, ...otherProps } = props;

    return (
        <h2
            {...otherProps}
            className={clsx(
                "text-1.5 leading-1 font-thin text-gray-500",
                defaultBottomMargin ? "mb-1" : ""
            )}>
            {children}
        </h2>
    );
};

export default Section;
