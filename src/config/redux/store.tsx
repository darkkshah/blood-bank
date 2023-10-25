import {configureStore} from '@reduxjs/toolkit'
import userslice from "./reducers/userslice";

const store = configureStore({
    reducer:{
        user: userslice,
    }
})

export default store 