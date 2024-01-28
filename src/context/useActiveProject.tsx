import { ActiveProject } from "@/data/projects";
import { createContext, useContext } from "react";

type ActiveProjectContextType = {
    activeProject: ActiveProject;
    setActiveProject: React.Dispatch<
        React.SetStateAction<ActiveProject | null>
    >;
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
