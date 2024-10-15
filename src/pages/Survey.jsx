import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { Loader } from "react-feather"
import RightFalse from "../components/RightFalse"
import useFetch from "../hooks/useFetch"

function Survey() {
    let { num } = useParams()
    num = parseInt(num)
    let prevNum = num > 1 ? num - 1 : 1
    let nextNum = num < 10 ? num + 1 : 10

    const [data, dataLoaded, error] = useFetch("http://localhost:8000/survey")

    if(error){
        return <p>Erreur lors du chargement des données</p>
    }

    return (
        <>
            <h1 className="text-5xl dark:text-white">Questionnaire 🧮</h1>
            <h2 className={`text-3xl mt-4 ${num % 2 == 1 ? "text-red-700 dark:text-red-500" : "text-blue-700 dark:text-blue-500"}`}>Question {num}</h2>
            <div className="mb-8 dark:text-white">

                {!dataLoaded ? (
                    <Loader />
                ) : (
                    <>
                        {data[num]}
                        <RightFalse question={data[num]} />
                    </>
                )}
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

            </div>
        </>
    )
}

export default Survey