import { createSlice } from "@reduxjs/toolkit";
import { defaulData } from "../DefaultData";

const UserSlice=createSlice({
    name:"user",
    initialState:defaulData,
    reducers:{

    }
})
export default UserSlice.reducer;