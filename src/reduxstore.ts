//file initialises store with app state
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import inputReducer from './input'
import itemsReducer from './items'


export const Store = configureStore({
    //reducer object with named reducer functions
    reducer: {
        items: itemsReducer,


        counter: counterReducer,
        input: inputReducer
    }
})

//for strong typing
export type AppDispatch = typeof Store.dispatch
