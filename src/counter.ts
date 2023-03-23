// counter reducer module

import { createSlice } from '@reduxjs/toolkit'

interface Action {
    type: string,
    payload: any
}

interface Payload {
    desc: string
}

const initialState = {
    counter: 0
};

//redux action
const addToCartAction = {
    type: 'maincontent/addToCart',
    payload: {
        desc: 'Item added to cart'
    } as Payload
} as Action

//redux tool for defining the state and a reducer with actions
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        incrementByAmount(state, action: Action) {
            state.counter += action.payload
        }
    },
})

export default counterSlice.reducer
export const { increment, decrement, incrementByAmount } = counterSlice.actions