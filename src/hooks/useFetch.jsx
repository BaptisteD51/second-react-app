import { useEffect, useState } from 'react'

function useFetch(url){
    const [data, setData] = useState(null)
    const [dataLoaded, setDataLoaded] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error('Erreur lors du chargement des données')
                }
                const data = await response.json()
                setData(data.surveyData)
            } catch (err) {
                console.log(err)
            } finally {
                setDataLoaded(true)
            }

        }

        fetchData()
    }, [])

    return [data, dataLoaded]
}