import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: null,
  firstName: null,
  lastName: null,
  email: null,
  password: null,
  token: null,
  error: null,
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
    },
  addError: (state, action) => {
    state.error = action.payload
  },},

})

export const reducer = userAuthSlice.reducer

export const {
  addEmail,
  addPassword,
  addToken,
  addId,
  addLastName,
  addFirstName, 
  addError,
} = userAuthSlice.actions

const initialSwitchState = {
  active: false,
}
 export const switchSlice = createSlice({
  name: 'switch',
  initialState: initialSwitchState,
  reducers: {
    toggleOn: (state = initialState) => {
      state.active = true;
    },
    toggleOff: (state = initialState) => {
      state.active = false;
    }
  }
})
export const switchReducer = switchSlice.reducer
export const {toggleOn, toggleOff} = switchSlice.actions
export default switchSlice.reducer

const removePersistSlice = createSlice({
  name: 'removePersistState',
  initialState,
  reducers: {
    clearResults() {
    },
  },
})
export const { clearResults } = removePersistSlice.actions
