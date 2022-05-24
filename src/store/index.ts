import { AnyAction, configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'

import mailerSlice from './mailer'
import themeSlice from './theme'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const store = configureStore<AnyAction | any>({
  reducer: {
    mailerState: mailerSlice.reducer,
    themeState: themeSlice.reducer,
  },
  middleware: [thunkMiddleware],
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
