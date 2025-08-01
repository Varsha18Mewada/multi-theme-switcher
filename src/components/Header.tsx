import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { theme1 } from "../themes/theme1";
import { theme2 } from "../themes/theme2";
import { theme3 } from "../themes/theme3";
import { setTheme, type ThemeType } from "../redux/slices/themeSlice";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const dispatch = useDispatch();

  const themeMap = {
    theme1,
    theme2,
    theme3,
  };
  const currentTheme = useSelector(
    (state: RootState) => state.theme.currentTheme
  );
  const theme = themeMap[currentTheme];

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setTheme(e.target.value as ThemeType));
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 px-4 py-3 ${theme.bgColor} ${theme.textColor} flex justify-between items-center`}
    >
      <span className="text-lg font-bold">ThemeApp</span>
      <div className="flex gap-4 items-center">
        <nav className="flex flex-end gap-4 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive
                  ? `px-4 py-2 rounded ${theme.activeBgColor} ${theme.activeTextColor}`
                  : `${theme.bgColor} ${theme.textColor}`
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${
                isActive
                  ? `px-4 py-2 rounded ${theme.activeBgColor} ${theme.activeTextColor}`
                  : `${theme.bgColor} ${theme.textColor}`
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${
                isActive
                  ? `px-4 py-2 rounded ${theme.activeBgColor} ${theme.activeTextColor}`
                  : `${theme.bgColor} ${theme.textColor}`
              }`
            }
          >
            Contact
          </NavLink>
          <select
            value={currentTheme}
            onChange={handleThemeChange}
            className={`p-1 border rounded`}
          >
            <option value="theme1" className={"text-black"}>
              Theme 1
            </option>
            <option value="theme2" className={"text-black"}>
              Theme 2
            </option>
            <option value="theme3" className={"text-black"}>
              Theme 3
            </option>
          </select>
        </nav>
      </div>
    </header>
  );
};
