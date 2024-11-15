import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        isThemeDark: false
    },
    reducers: {
        changeTheme: state => {
            state.isThemeDark = !state.isThemeDark
        }
    }
}
)

export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer