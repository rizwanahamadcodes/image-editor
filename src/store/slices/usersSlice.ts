import { users, User } from "@/data/users";
import { createSlice } from "@reduxjs/toolkit";

const initialUsersState: User[] = users;

const usersSlice = createSlice({
    name: "users",
    initialState: initialUsersState,
    reducers: {},
});

export const {} = usersSlice.actions;
export default usersSlice.reducer;
