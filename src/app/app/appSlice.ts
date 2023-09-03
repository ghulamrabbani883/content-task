import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isResponsive:false,
    isDark:false
}
export const appSlice = createSlice({
    name:"app",
    initialState,
    reducers:{
        setResponsive:(state)=>{
            state.isResponsive = !state.isResponsive
        },
        setDark:(state)=>{
            state.isDark = !state.isDark
        }
    },
    extraReducers:{

    }
})

export const {setResponsive, setDark}  = appSlice.actions
export default appSlice.reducer
export const getResponsive = (state:any)=>{
    return state.app.isResponsive
}
export const getDark = (state:any)=>state.isDark
