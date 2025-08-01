import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { theme1 } from "../themes/theme1";
import { theme2 } from "../themes/theme2";
import { theme3 } from "../themes/theme3";

export const Contact = () => {
    const themeMap = {
        theme1,
        theme2,
        theme3,
    };
    const currentTheme = useSelector(
        (state: RootState) => state.theme.currentTheme
    );
    const theme = themeMap[currentTheme];
    return (
        <div className="px-4 py-8 mx-auto">
            <h1 className={`text-3xl font-bold m-6 text-center ${theme.textColor}`}>
                Contact Us
            </h1>
            <div className="space-y-4">
                <div className={`flex justify-center items-center`}>
                    <p
                        className={`border w-100 h-10 rounded flex justify-center items-center m-4 ${theme.bgColor} ${theme.textColor} ${theme.border}`}
                    >
                        Send a Message
                    </p>
                </div>
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className={`w-full px-4 py-2 border rounded ${theme.border} focus:outline-none focus:ring-2 focus:ring-blue-400`}
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className={`w-full px-4 py-2 border rounded ${theme.border} focus:outline-none focus:ring-2 focus:ring-blue-400`}
                    />
                    <textarea
                        rows={4}
                        placeholder="Your Message"
                        className={`w-full px-4 py-2 border rounded ${theme.border} focus:outline-none focus:ring-2 focus:ring-blue-400`}
                    />
                    <button
                        className={`${theme.textColor} ${theme.bgColor} px-4 py-2 rounded`}
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};
