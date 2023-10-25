import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name:'user',
    initialState:[],
    reducers:{
        user:(state:any,action:any)=>{
            state.push(action.payload)
        },
    }
})


export const {user} = UserSlice.actions
export default UserSlice.reducer