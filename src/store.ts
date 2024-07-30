import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        values: valuesReducer,
    },
})

function valuesReducer() {
    return
}
    

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch