import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: null,
  firstName: null,
  lastName: null,
  email: null,
  password: null,
  token: null,
}

export const userAuthSlice = createSlice({
   name: 'userAuthInfos',
   initialState,
   reducers: {
    addId: (state, action) => {
      state.id = action.payload
    },
     addFirstName: (state, action) => {
       state.firstName = action.payload
     },
     addLastName: (state, action) => {
       state.lastName = action.payload
     },
    addEmail: (state, action) => {
      state.email = action.payload
    },
    addPassword: (state, action) => {
      state.password = action.payload
    },
    addToken: (state, action) => {
      state.token = action.payload
    }},
    logOut() {
      return initialState
   }
})

export const reducer = userAuthSlice.reducer

export const {
  addEmail,
  addPassword,
  addToken,
  addId,
  addLastName,
  addFirstName, 
  logOut
} = userAuthSlice.actions

