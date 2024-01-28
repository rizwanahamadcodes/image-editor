import { Project, projects } from "@/data/projects";
import { RootState } from "@/store/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
    name: "projects",
    initialState: projects as Project[],
    reducers: {
        addProject: (state, action: PayloadAction<Project>) => {
            state.push(action.payload);
        },
    },
});

export const selectProjectById = (state: RootState, projectId: number) => {
    const foundProject = state.projects.find((project) => {
        return project.projectId === projectId;
    });

    if (foundProject) {
        return foundProject;
    } else {
        return null;
    }
};
export const selectAllProject = (state: RootState) => {
    return state.projects;
};

export const { addProject } = projectsSlice.actions;
export default projectsSlice.reducer;
