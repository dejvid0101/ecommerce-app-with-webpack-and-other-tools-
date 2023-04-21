import {createSlice} from '@reduxjs/toolkit'
import { Tag, TagAptCon } from './interfaces/interfaces'

const initialState: Tag[] =[];

export interface TagsActionType {
    type: string,
    payload: Tag[]
}

//redux tool for defining the state and a reducer with actions
const tagsSlice = createSlice({
    name: 'tags',
    initialState,
    reducers: {
        setTags(state, action: TagsActionType) {
            //received action payload return from action to preserve immutability
            return [...state, ...action.payload];
        }
    },
})
export default tagsSlice.reducer
export const { setTags } = tagsSlice.actions