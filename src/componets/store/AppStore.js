import { configureStore } from "@reduxjs/toolkit";
import UserReduser from "./UserSlice";

 
const AppStore=configureStore({
    reducer:{
        data:UserReduser
        
    }
})
export default AppStore;