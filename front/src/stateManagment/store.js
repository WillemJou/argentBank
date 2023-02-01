import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { reducer, switchReducer } from "./reducer"
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({ 
  userAuthInfos: reducer,
  switch: switchReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer )

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

 export const persistor = persistStore(store)

export const resetStore = async () => {
  await persistor.purge()
  await persistor.flush()
}