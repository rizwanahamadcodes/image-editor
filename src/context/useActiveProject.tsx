import { Project } from "@/data/projects";
import { createContext, useContext } from "react";

type ActiveProjectContextType = {
    activeProject: Project;
    setActiveProject: React.Dispatch<React.SetStateAction<Project | null>>;
};

export const ActiveProjectContext =
    createContext<ActiveProjectContextType | null>(null);

export const useActiveProject = () => {
    const activeProject = useContext(ActiveProjectContext);

    if (!activeProject) {
        throw new Error(
            "useActiveProject has to be within <ActiveProjectContext.Provide>"
        );
    }

    return activeProject;
};
