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
            //for each item received inside Items[], create object with selected properties and add to reducer state
            action.payload.map((item) => {
                state.push({
                    Name: item.Name,
                    Address: item.Address,

                } as Item);
            });
        }
    },
})
export default itemsSlice.reducer
export const { setItems } = itemsSlice.actions