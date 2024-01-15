type ContainerProps = React.ComponentPropsWithRef<"div">;

const Container = (props: ContainerProps) => {
    const { children } = props;

    return <div className="m-auto max-w-7xl w-[86%]">{children}</div>;
};

export default Container;
