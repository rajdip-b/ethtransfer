import { appReducer, AppSliceState } from './app-slice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

export interface StoreState {
    app: AppSliceState;
}

const appPersistConfig = {
    key: 'ethtransfer-app',
    storage,
};

const rootPersistConfig = {
    key: 'ethtransfer-root',
    storage,
};

const rootReducer = combineReducers({
    app: persistReducer(appPersistConfig, appReducer),
});

const store = configureStore({
    reducer: persistReducer(rootPersistConfig, rootReducer),
});

export const persistor = persistStore(store);
export default store;
export type RootDispatch = ReturnType<typeof store.dispatch>;
