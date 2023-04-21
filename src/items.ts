import { createSlice } from '@reduxjs/toolkit'
import { Item } from './interfaces/interfaces'

const initialState: Item[] =[];

export interface ItemsActionType {
    type: string,
    payload: Item[]
}

//redux tool for defining the state and a reducer with actions
const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        setItems(state, action: ItemsActionType) {
            //received action payload return from action to preserve immutability
            return [...state, ...action.payload]
        }
    },
})
export default itemsSlice.reducer
export const { setItems } = itemsSlice.actions