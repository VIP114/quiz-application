import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './store/reducers/rootReducers'
// import loginReducer from './store/reducers/loginReducer'
import logger from 'redux-logger'

const persistConfig = {
  key: 'persist-key',
  storage: storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const Middlewares = []
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...Middlewares)))
const persistor = persistStore(store)
export default store
export { persistor }
