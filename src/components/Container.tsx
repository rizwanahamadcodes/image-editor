import clsx from "clsx";

type ContainerProps = React.ComponentPropsWithRef<"div">;

const Container = (props: ContainerProps) => {
    const { children, className } = props;

    return (
        <div className={clsx("m-auto max-w-7xl w-[86%]", className)}>
            {children}
        </div>
    );
};

export const FullWidthContainer = (props: ContainerProps) => {
    const { children, className } = props;

    return (
        <div className={clsx("m-auto max-w-7xl px-2", className)}>
            {children}
        </div>
    );
};

export default Container;
