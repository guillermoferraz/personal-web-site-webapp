/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Example from '../services/example'
import { constantsTypes } from '../constants/constants'
import { RootState } from '.'

export const getExample = createAsyncThunk('getExample', async () => {
  try {
    const response = await Example.getExample()
    return response
  } catch (err) {
    console.error(err)
  }
})

export const postExample = createAsyncThunk('postExample', async (data: string) => {
  try {
    const response = await Example.postExample(data)
    return response
  } catch (err) {
    console.error(err)
  }
})

const exampleSlice = createSlice({
  name: 'exampleState',
  initialState: {
    exampleData: undefined || '',
    examplePostData: undefined || ''
  },
  reducers:{
    setCleanExampleData: (state: any) => {
      state.examplePostData = undefined
    }
  },
  extraReducers: builder => {
    builder.addCase(getExample.fulfilled, (state, { payload }) => {
      state.exampleData = payload
    })
    .addCase(getExample.pending, (state) => {
      state.exampleData = constantsTypes.PENDING
    })
    .addCase(postExample.fulfilled, (state, { payload }) => {
      state.examplePostData = payload
    })
    .addCase(postExample.pending, (state) => {
      state.examplePostData = constantsTypes.PENDING
    })
  }
})
export default exampleSlice