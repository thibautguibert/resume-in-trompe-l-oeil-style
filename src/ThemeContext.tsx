import * as React from "react";

const themeColours = {
    light: {
        color: "#001011",
        backgroundColor: "white",
        altColor: "#F65454"
    },
    dark: {
        color: "whitesmoke",
        backgroundColor: "#3f3f3f",
        altColor: "#ad707f"
    },
    ol: {
        color: "#3E00BA",
        backgroundColor: "#ECECEC",
        altColor: "#E70000"
    }
}

type ThemeName = "light" | "dark" | "ol";
type ThemeContextType = {
    theme: ThemeName,
    setTheme: (name: ThemeName) => void;
};
const ThemeContext = React.createContext<
    ThemeContextType
>(undefined!);

type Props = {
    children: React.ReactNode,
};
export const ThemeProvider = ({
    children,
}: Props) => {
    const [themeName, setThemeName] =
        React.useState<ThemeName>("light");

    const setTheme = (name: ThemeName) => {
        document.body.style.setProperty(
            "--text-color",
            themeColours[name].color
        );
        document.body.style.setProperty(
            "--body-bg-color",
            themeColours[name].backgroundColor
        );
        document.body.style.setProperty(
            "--wcs",
            themeColours[name].altColor
        );
        setThemeName(name);
    };
    return (
        <ThemeContext.Provider
            value={{ theme: themeName, setTheme }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => React.useContext(ThemeContext);