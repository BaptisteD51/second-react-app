import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { Loader } from "react-feather"
import RightFalse from "../components/RightFalse"

function Survey() {
    let { num } = useParams()
    num = parseInt(num)
    let prevNum = num > 1 ? num - 1 : 1
    let nextNum = num < 10 ? num + 1 : 10

    const [questions, setQuestions] = useState(null)
    const [dataLoaded, setDataLoaded] = useState(false)


    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch("http://localhost:8000/survey")
                if (!response.ok) {
                    throw new Error('Erreur lors du chargement des données')
                }
                const data = await response.json()
                setQuestions(data.surveyData)
            } catch (err) {
                console.log(err)
            } finally {
                setDataLoaded(true)
            }

        }

        fetchQuestions()
    }, [])

    return (
        <>
            <h1 className="text-5xl dark:text-white">Questionnaire 🧮</h1>
            <h2 className={`text-3xl mt-4 ${num % 2 == 1 ? "text-red-700 dark:text-red-500" : "text-blue-700 dark:text-blue-500"}`}>Question {num}</h2>
            <div className="mb-8 dark:text-white">
                { !dataLoaded ? (
                    <Loader/>
                ) : (
                    <>
                        {questions[num]}
                        <RightFalse question={questions[num]}/>
                    </>
                )}
            </div>
            <nav className="flex justify-center gap-4">

                <p>
                    <Link
                        to={"/survey/" + prevNum}
                        className="p-4 bg-blue-800 text-blue-100 rounded-full"
                    >
                        Précédent
                    </Link>
                </p>

                {num < 10 ? (
                    <p>
                        <Link
                            to={"/survey/" + nextNum}
                            className="p-4 bg-blue-800 text-blue-100 rounded-full"
                        >
                            Suivant
                        </Link>
                    </p>
                ) : (
                    <p>
                        <Link
                            to={"/results"}
                            className="p-4 bg-blue-800 text-blue-100 rounded-full"
                        >
                            Résultats
                        </Link>
                    </p>
                )
                }
            </nav>
        </>
    )
}

export default Survey