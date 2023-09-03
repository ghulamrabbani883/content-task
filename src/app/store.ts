import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import contactReducer from './contact/contactSlice'
import appReducer from './app/appSlice'

export type contactType = {
    id:string,
    name:string,
    job:string,
    email:string,
    phone:string
}

export const store:any = configureStore({
    reducer: {
        contact:contactReducer,
        app:appReducer
      },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {contacts: ContactState}
export type AppDispatch = typeof store.dispatch


// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
 