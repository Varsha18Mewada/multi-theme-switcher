import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type ThemeType = "theme1" | "theme2" | "theme3";

const savedTheme = (localStorage.getItem("theme") as ThemeType) || "theme1";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    currentTheme: savedTheme,
  },
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      state.currentTheme = action.payload;
      localStorage.setItem("theme", action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
