import clsx from "clsx";
import { ComponentPropsWithRef } from "react";

type SectionProps = ComponentPropsWithRef<"section">;

const Section = (props: SectionProps) => {
    const { children, ...otherProps } = props;

    return (
        <section {...otherProps} className="py-1">
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

export default Section;
