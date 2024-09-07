import weatherReducer from "./slices"
import {configureStore} from "@reduxjs/toolkit";


export const mainStore = configureStore({
	reducer: {
		weather: weatherReducer,
	},
})

export type RootState = ReturnType<typeof mainStore.getState>;
export type AppDispatch = typeof mainStore.dispatch;