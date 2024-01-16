import Sidebar from "@/components/Sidebar/Sidebar";
import RootLayout from "./RootLayout";

const DashboardLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout>
            <div className="flex grow">
                <Sidebar />
                <main className="grow">{page}</main>
            </div>
        </RootLayout>
    );
};

export default DashboardLayout;
