import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDarkTheme: false
}

const themeSlice = createSlice({
    name: 'themeChange',
    initialState: initialState,
    reducers: {
        themeChanger(state) {
            state.isDarkTheme = !state.isDarkTheme;
        }
    }
})

export const { themeChanger } = themeSlice.actions;

export default themeSlice.reducer;