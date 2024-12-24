import { configureStore } from '@reduxjs/toolkit';

//reducers
import appStore from './appStore';

const reduxStore = configureStore({
    reducer: {
        appStore
    }
})

export type RootState = ReturnType <typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;

export default reduxStore;