//file initialises store with app state
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import inputReducer from './input'
import itemsReducer from './items'
import tagaptconsReducer from './tagaptcons'
import tagsReducer from './tags'

//*TYPE USESELECTOR STATE OBJECTS IN COMPS
export const Store = configureStore({
    //reducer object with named reducer functions
    reducer: {
        items: itemsReducer,
        tagaptcons: tagaptconsReducer,
        tags: tagsReducer,

        counter: counterReducer,
        input: inputReducer
    }
})

//for strong typing
export type AppDispatch = typeof Store.dispatch
