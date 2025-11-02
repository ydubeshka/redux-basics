import type {IUser} from "../../models/IUser.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "./ActionCreators.ts";


interface UserState {
    users: IUser[],
    isLoading: boolean,
    error: string,
}


const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
}

// @ts-ignore
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: builder => builder
        .addCase(
            fetchUsers.pending,
        (state: UserState) =>{
          state.isLoading = true;
        })
        .addCase(
            fetchUsers.fulfilled,
            (state: UserState, action: PayloadAction<IUser[]>) => {
                state.isLoading = false;
                state.error = '';
                state.users = action.payload;
            }
        )
        .addCase(
            fetchUsers.rejected,
            (state: UserState, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.error = action.payload;
            }
        )
})

export default userSlice.reducer;
