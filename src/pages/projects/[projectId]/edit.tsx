import { PiUploadSimpleBold } from "react-icons/pi";
import EditingWindow from "@/components/EditingWindow/EditingWindow";
import { ToolBox } from "@/components/ToolBox/ToolBox";
import { paramConstants } from "@/routes/pathContants";
import { selectProjectById } from "@/store/slices/projectsSlice";
import { RootState } from "@/store/store";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { ActiveProjectContext } from "@/context/useActiveProject";
import { useEffect, useState } from "react";
import { Project } from "@/data/projects";
import { CanvasContext } from "@/context/useCanvas";
import { fabric } from "fabric";
import Container from "@/components/Container";
import BrandLogo from "@/components/BrandLogo/BrandLogo";
import Button, { ButtonIcon } from "@/components/Button/Button";
import { FaSave } from "react-icons/fa";

const EditProject = () => {
    const router = useRouter();
    const projectIdString = router.query[paramConstants.PROJECTID] as string;
    const projectId = projectIdString ? parseInt(projectIdString) : undefined;

    const [activeProject, setActiveProject] = useState<Project | null>(null);
    const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);

    const projectFromGlobalState = useSelector((state: RootState) => {
        return selectProjectById(state, projectId as number);
    });

    useEffect(() => {
        if (!projectFromGlobalState) return;

        setActiveProject(projectFromGlobalState);
    }, [projectFromGlobalState]);

    if (!activeProject) {
        return "The project was not found";
    }

    return (
        <CanvasContext.Provider
            value={{ canvas: canvas, setCanvas: setCanvas }}>
            <ActiveProjectContext.Provider
                value={{
                    activeProject: activeProject,
                    setActiveProject: setActiveProject,
                }}>
                <div className="overflow-y-auto flex grow">
                    <ToolBox />
                    <EditingWindow />
                </div>
            </ActiveProjectContext.Provider>
        </CanvasContext.Provider>
    );
};

EditProject.getLayout = (page: React.ReactNode) => (
    <div className="h-[100dvh] relative flex flex-col overflow-auto">
        <nav className="h-navHeight shrink-0 border-b border-b-gray-100">
            <Container className="flex justify-between h-full items-center gap-1">
                <BrandLogo />
                <div className="flex gap-1">
                    <Button variant="solid" colorScheme="primary" size="sm">
                        <ButtonIcon icon={FaSave} />
                        Save
                    </Button>
                    <Button variant="outline" colorScheme="primary" size="sm">
                        <ButtonIcon icon={PiUploadSimpleBold} />
                        Export
                    </Button>
                </div>
            </Container>
        </nav>
        {page}
    </div>
);
export default EditProject;
