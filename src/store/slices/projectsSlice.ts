import { Project, projects } from "@/data/projects";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

const initialProjectsState: Project[] = projects;

const projectsSlice = createSlice({
    name: "projects",
    initialState: initialProjectsState,
    reducers: {},
});

export const selectProjectById = (state: RootState, projectId: number) => {
    return state.projects.find((project) => {
        return project.projectId === projectId;
    });
};

export const {} = projectsSlice.actions;
export default projectsSlice.reducer;