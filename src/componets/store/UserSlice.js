import { createSlice } from "@reduxjs/toolkit";
import { defaulData } from "../DefaultData";

const UserSlice=createSlice({
    name:"user",
    initialState:defaulData,
    reducers:{
        Adduser:(state,action)=>{
            state.push(action.payload)

        }

    }
})
export const {Adduser}=UserSlice.actions
export default UserSlice.reducer;