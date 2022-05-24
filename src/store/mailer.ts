/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { PostMailerTypes } from './types/mailerTypes'
import Mailer from '../services/mailer'

import { constantsTypes } from '../constants/constants'

export const postMailer = createAsyncThunk(
  '/api/mailer/contact',
  async (data: PostMailerTypes) => {
    try {
      const response = await Mailer.postMailer(data)
      return response
    } catch (err) {
      console.error(err)
    }
  }
)

const mailerSlice = createSlice({
  name: 'mailerState',
  initialState: {
    responsePostMailer: '',
  },
  reducers: {
    setCleanExampleData: (state: any) => {
      state.responsePostMailer = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postMailer.fulfilled, (state, { payload }: any) => {
        state.responsePostMailer = payload
      })
      .addCase(postMailer.pending, (state) => {
        state.responsePostMailer = constantsTypes.PENDING
      })
  },
})
export default mailerSlice
