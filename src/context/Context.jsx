import { createContext } from "react"
import { useState } from "react"

// Permet de récupérer les donnée dans les consumers de context
export const ThemeContext = createContext()

// c'est le component à utliser pour englober les éléments d'un même contexte
export const ThemeProvider = ({children})=>{
    const [theme,setTheme] = useState("light")
    function toogleTheme() {
        setTheme(theme == "light" ? "dark" : "light")
    }

    return (
        <ThemeContext.Provider value={{theme, toogleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}