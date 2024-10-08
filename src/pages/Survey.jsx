import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

function Survey() {
    let {num} = useParams()
    num = parseInt(num)
    let prevNum = num > 1 ? num - 1 : 1
    let nextNum = num < 10 ? num + 1 : 10    

    return (
        <>
            <h1>Questionnaire 🧮</h1>
            <h2>Question {num}</h2>
            <nav>
                <p><Link to={"/survey/" + prevNum} >Précédent</Link></p>
                { num < 10 ? (
                    <p><Link to={"/survey/" + nextNum}>Suivant</Link></p>
                ) : (
                    <p><Link to={"/results"}>Résultats</Link></p>
                )
                }
            </nav>
        </>
    )
}

export default Survey