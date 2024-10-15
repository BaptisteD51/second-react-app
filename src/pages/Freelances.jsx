import Card from "../components/Card"
import DefaultPicture from "../assets/photo-cv.png"
import { useEffect, useState } from "react"
import { Loader } from "react-feather"

function Freelances() {

    const [freelances, setFreelances] = useState(null)
    const [dataLoaded, setDataLoaded] = useState(false)


    useEffect(() => {
        async function fetchFreelances() {
            try {
                const response = await fetch("http://localhost:8000/freelances")
                if(!response.ok){
                    throw new Error("Erreur lors du chargement des données")
                }
                const fetchedFreelances = await response.json()
                setFreelances(fetchedFreelances.freelancersList)
            } catch (err) {
                console.log(err)
            } finally {
                setDataLoaded(true)
            }
        }

        fetchFreelances()
    }, [])


    return (
        <>
            <h1 className="text-2xl text-center mb-8 dark:text-white">Trouvez votre prestataire</h1>
            <p className="text-slate-500 text-center dark:text-gray-100">Chez shiny nous réunissons les meilleurs profils pour vous.</p>
            {!dataLoaded ? (
                <p className="flex justify-center mt-6">
                    <Loader />
                </p>
            ) : (
                <div className="mt-8 max-w-xl mx-auto grid grid-cols-2 grid-rows-2 gap-y-10 place-items-center max-md:block ">
                    {
                        freelances.map((profile, index) => (
                            <Card
                                label={profile.name}
                                title={profile.job}
                                picture={profile.picture}
                                key={profile.name + index}
                            />
                        ))
                    }
                </div>
            )}
        </>
    )
}

export default Freelances