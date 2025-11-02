import {createAsyncThunk} from "@reduxjs/toolkit";
import type {IUser} from "../../models/IUser.ts";
import axios from "axios";


export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            return response.data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue("Cannot load users");
        }
    }
)
