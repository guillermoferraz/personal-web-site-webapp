/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ConstantThemes } from './types/themeTypes'
import Theme from '../services/theme'

export const getTheme = createAsyncThunk('getTheme', async () => {
  try { 
    const response = await Theme.getTheme()
    return response
  } catch (err) {
    console.error(err)
  }
})

export const changeTheme = createAsyncThunk('changeTheme', async (theme: string) => {
  try {
    const response = await Theme.changeTheme(theme)
    return response
  } catch (err) {
    console.error(err)
  }
})

const themeSlice = createSlice({
  name: 'themeState',
  initialState: {
   themeData: ConstantThemes.LIGTH,
   responseChangeTheme: '',
   dark: false
  },
  reducers:{
  },
  extraReducers: builder => {
    builder.addCase(getTheme.fulfilled, (state, { payload }) => {
      state.themeData = payload || ConstantThemes.LIGTH
      state.dark = payload === ConstantThemes.DARK ? true : false
    })
    .addCase(changeTheme.fulfilled, (state, { payload }) => {
      state.responseChangeTheme = payload || ''
    })
  }
})
export default themeSlice