import { useContext } from "react"
import { ThemeContext } from "../context/Context"

function Wrapper({children}){
    const { theme } = useContext(ThemeContext)
    return(
        <section className={`app-wrapper ${theme} dark:bg-gray-800`}>
            {children}
        </section>
    )
}

export default Wrapper