import { Project } from "@/data/projects";
import { createContext, useContext } from "react";

export const ProjectContext = createContext<Project | null>(null);

export const useProject = () => {
    const project = useContext(ProjectContext);

    if (!project) {
        throw new Error("useProject has to be within <ProjectContext.Provide>");
    }

    return project;
};
