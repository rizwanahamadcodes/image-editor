import lists, { List } from "@/data/lists";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

const initialListsState: List[] = lists;

const listsSlice = createSlice({
    name: "lists",
    initialState: initialListsState,
    reducers: {},
});

export const selectListByUserId = (state: RootState, userId: number) => {
    return state.lists.filter((list) => list.userId === userId);
};
export const selectListByListId = (state: RootState, listId: number) => {
    return state.lists.find((list) => list.listId === listId);
};

export const {} = listsSlice.actions;
export default listsSlice.reducer;
