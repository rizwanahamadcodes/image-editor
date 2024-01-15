import Sidebar from "@/components/Sidebar/Sidebar";
import Layout from "./Layout";

const ProjectsListsLayout = function getLayout(page: React.ReactElement) {
    return (
        <Layout>
            <div className="h-full w-full grow">
                <Sidebar />
                <main>{page}</main>
            </div>
        </Layout>
    );
};

export default ProjectsListsLayout;
