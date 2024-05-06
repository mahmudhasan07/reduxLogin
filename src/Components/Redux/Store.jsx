
import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './CounterSlice';



const Store = configureStore({
    reducer: {firebase : CounterSlice},
})

export default Store;