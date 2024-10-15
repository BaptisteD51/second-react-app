import { useContext } from "react"
import { AnswersContext } from "../context/Answers"

function Results() {
    const { answers, addAnswer } = useContext(AnswersContext)

    return (
        <>
            <h1 className="text-5xl dark:text-white">Page des résultats🥇</h1>
            {answers.map((answer) => (
                <>
                    <p>{answer.questionText}</p>
                    <p>{answer.response}</p>
                </>

            ))}
        </>
    )
}

export default Results