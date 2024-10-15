import { Moon, Sun } from "react-feather"
import { ThemeContext } from "../context/Context"
import { useContext } from "react"

function Footer() {
    const { theme, toogleTheme } = useContext(ThemeContext)

    return (
        <footer className="flex justify-center p-6">
            <button onClick={toogleTheme}>
                {theme == 'light' ? (
                    <>
                        <Moon className="inline-block" />
                        <span>Mode sombre</span>
                    </>
                ) : (
                    <>
                        <Sun className="inline-block" color="white"/>
                        <span className="dark:text-white">Mode clair</span>
                    </>
                )}
            </button>
        </footer>
    )
}

export default Footer 