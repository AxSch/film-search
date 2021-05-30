import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import searchResultReducer from '../reducers/searchResults/searchResultSlice';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, searchResultReducer)

export const store = configureStore({
    reducer: {
        searchResults: persistedReducer
    },
    middleware: getDefaultMiddleware()
})

export const persistor = persistStore(store);
