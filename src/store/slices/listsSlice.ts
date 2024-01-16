import lists, { List } from "@/data/lists";
import { createSlice } from "@reduxjs/toolkit";

const initialListsState: List[] = lists;

const listsSlice = createSlice({
    name: "lists",
    initialState: initialListsState,
    reducers: {},
});

export const {} = listsSlice.actions;
export default listsSlice.reducer;
