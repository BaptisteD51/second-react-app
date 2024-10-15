import { createContext } from "react"
import { useState } from "react"

export const AnswersContext = createContext()

export const AnswersProvider = function({children}){
    const [ answers, updateAnswers] = useState([])

    function addAnswer(question, answer){
        updateAnswers([...answers, {questionText:question,response:answer}] )
    }

    return (
        <AnswersContext.Provider value={{answers,addAnswer}}>
            {children}
        </AnswersContext.Provider>
    )
}