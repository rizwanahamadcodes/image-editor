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

type SectionTitleProps = ComponentPropsWithRef<"h2">;

export const SectionTitle = (props: SectionTitleProps) => {
    const { children, ...otherProps } = props;

    return (
        <h2 {...otherProps} className="font-medium text-1 text-gray-800">
            {children}
        </h2>
    );
};

export default Section;
