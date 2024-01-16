import { Project, projects } from "@/data/projects";
import { createSlice } from "@reduxjs/toolkit";

const initialProjectsState: Project[] = projects;

const projectsSlice = createSlice({
    name: "projects",
    initialState: initialProjectsState,
    reducers: {},
});

export const {} = projectsSlice.actions;
export default projectsSlice.reducer;
