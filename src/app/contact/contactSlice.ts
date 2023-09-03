import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { useAppSelector, type RootState, type contactType } from '../../app/store'


export const initialState = {
    contact: [] as contactType[],
}
    
    
export const contactSlice = createSlice({
    name:"contact",
    initialState,
    reducers:{
        createContact:(state:RootState, action:PayloadAction<contactType>)=>{
            state.contact = [...state.contact, action.payload]
        },
        deleteContact:(state:RootState, action:PayloadAction<string>)=>{
            const remainingContact = state.contact.filter((contact:contactType)=>contact.id !== action.payload)
            state.contact = remainingContact;
        },
        editContact:(state:RootState, action:PayloadAction<contactType>)=>{
            const remainingContact = state.contact.filter((contact:contactType)=>contact.id !== action.payload.id)
            state.contact = [...remainingContact, action.payload]
        },
    },
})

export const { createContact, deleteContact, editContact } = contactSlice.actions
export default contactSlice.reducer
export const selectContact = (state:any)=>state.contact
export const useAllContacts = ()=>useAppSelector(selectContact);
export const useContact = (id:string|undefined)=>{
    const allContacts = useAllContacts();
    const contact =  allContacts.contact.find((contact:contactType)=>contact.id === id)
    return contact
}
