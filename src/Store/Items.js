import { createSlice } from '@reduxjs/toolkit';
import { fetchItems } from '../Api/api';

const initialState = {
    items: null,
    isLoading: false,
    isError: false,
    editData: {},
};
const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        setEditData(state, action) {
            state.editData = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchItems.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchItems.fulfilled, (state, action) => {
            state.isLoading = false;
            state.items = Object.entries(action.payload);
        })
        builder.addCase(fetchItems.rejected, (state, action) => {
            state.isError = true;
        })
    }
});

export const itemActions = itemsSlice.actions;

export default itemsSlice.reducer;
