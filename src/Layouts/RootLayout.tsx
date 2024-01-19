import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";

type RootLayoutProps = {
    children: React.ReactNode;
};

const RootLayout = (props: RootLayoutProps) => {
    const { children } = props;

    return (
        <div className="h-screen max-h-screen relative flex flex-col overflow-hidden">
            <Header />
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default RootLayout;
