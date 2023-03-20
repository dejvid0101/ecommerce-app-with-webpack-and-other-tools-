import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './counter'


export const Store = configureStore({ 
    //reducer object with named reducer functions
    reducer: {
        counter: counterReducer
    } 
})

