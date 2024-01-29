import { Project, projects } from "@/data/projects";
import { RootState } from "@/store/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fabric } from "fabric";

const projectsSlice = createSlice({
    name: "projects",
    initialState: projects as Project[],
    reducers: {
        addProject: (state, action: PayloadAction<Project>) => {
            state.push(action.payload);
        },

        updateProjectCanvas: (state, action: PayloadAction<string>) => {
            // const canvas = JSON.stringify(action.payload.canvas);
            // state = state.map((project) => {
            //     if (project.projectId === action.payload.projectId) {
            //         return { ...project, canvas: canvas };
            //     }
            //     return { ...project };
            // });
            // console.log(JSON.parse(state[0].canvas));
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

export const { addProject, updateProjectCanvas } = projectsSlice.actions;
export default projectsSlice.reducer;
