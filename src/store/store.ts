import weatherReducer from "./slices"
import {configureStore} from "@reduxjs/toolkit";


export const store = configureStore({
	reducer: {
		weather: weatherReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;