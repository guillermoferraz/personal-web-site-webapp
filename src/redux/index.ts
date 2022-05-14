import { AnyAction, configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk';

import exampleSlice from './example'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const store = configureStore<AnyAction | any>({
  reducer: {
    exampleState: exampleSlice.reducer
  },
  middleware: [thunkMiddleware]
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store