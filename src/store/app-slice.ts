import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface AppSliceState {
    wallet: string | null;
}

const initialState: AppSliceState = {
    wallet: null
}

const appSlice = createSlice({
    name: 'ethtransfer-app',
    initialState,
    reducers: {
        setWallet(state: AppSliceState, action: PayloadAction<string | null>) {
            state.wallet = action.payload;
        }
    }
});

export const appReducer = appSlice.reducer;
export const appActions = appSlice.actions;