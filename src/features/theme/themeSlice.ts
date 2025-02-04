import { createSlice } from '@reduxjs/toolkit'

interface ThemeState {
  mode: "dark" | "light" | "inherit"
}

const initialState: ThemeState = {
  mode: 'dark'
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    dark: (state) => {
      state.mode = "dark"
    },
    light: (state) => {
      state.mode = "light"
    }
  },
})

// Action creators are generated for each case reducer function
export const { dark, light } = themeSlice.actions

export default themeSlice.reducer