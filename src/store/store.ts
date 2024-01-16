import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "@/store/slices/projectsSlice";
import listsReducer from "@/store/slices/listsSlice";
import usersReducer from "@/store/slices/usersSlice";

export const store = configureStore({
    reducer: {
        projects: projectsReducer,
        lists: listsReducer,
        users: usersReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
