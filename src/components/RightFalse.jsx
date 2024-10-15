import { AnswersContext } from "../context/Answers"
import { useContext, useEffect } from "react"

function RightFalse({question}) {
    const { answers, addAnswer } = useContext(AnswersContext)
    function submitAnswer(e,question){
        e.preventDefault()
        const data = new FormData(e.target)
        addAnswer(question, parseInt(data.get("answer")))

    }

    useEffect(()=>console.log(answers),[answers])

    return (
        <form action="" onSubmit={(e)=>submitAnswer(e,question)}>
            <p>
                <input type="radio" name="answer" id="vrai" value="1"/><label htmlFor="answer">Oui</label>
            </p>
            <p>
                <input type="radio" name="answer" id="faux" value="0" checked/><label htmlFor="answer">Non</label>
            </p>
            <input type="submit" value="Enregistrer" className="py-1 px-4 bg-blue-600 text-white rounded-full"/>
        </form>
    )
}

export default RightFalse