import {createSlice} from '@reduxjs/toolkit'
import { TagAptCon } from './interfaces/interfaces'

const initialState: TagAptCon[] =[];

export interface TagAptConsActionType {
    type: string,
    payload: TagAptCon[]
}

//redux tool for defining the state and a reducer with actions
const tagaptconsSlice = createSlice({
    name: 'tagaptcons',
    initialState,
    reducers: {
        setTagAptCons(state, action: TagAptConsActionType) {
            //for each item received inside TagAptCon[] payload, create object with renamed properties and return the new array to preserve immutability
            const tagAptCons=action.payload.map((TagAptCon) => {
                return {
                    
                    TagId: TagAptCon.TagId,
                    AptId: TagAptCon.AptId

                } as TagAptCon;
            });

            //what action returns is set to state to preserve immutability
            return [...state, ...tagAptCons]
        }
    },
})
export default tagaptconsSlice.reducer
export const { setTagAptCons } = tagaptconsSlice.actions