import { Project } from "@/data/projects";
import { createContext, useContext } from "react";

type ProjectContextType = {
    project: Project;
    setProject: React.Dispatch<React.SetStateAction<Project | null>>;
};

export const ProjectContext = createContext<ProjectContextType | null>(null);

export const useCurrentProject = () => {
    const project = useContext(ProjectContext);

    if (!project) {
        throw new Error("useProject has to be within <ProjectContext.Provide>");
    }

    return project;
};
