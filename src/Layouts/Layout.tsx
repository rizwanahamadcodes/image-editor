import Navbar from "../components/Navbar/Navbar";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
    const { children } = props;

    return (
        <>
            <Navbar />
            <main className="grow flex">{children}</main>
        </>
    );
};

export default Layout;
