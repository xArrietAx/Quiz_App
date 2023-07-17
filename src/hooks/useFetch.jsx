import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (currentQuestion) => {

    const [Data, setData] = useState(null)
    const [Loading, setLoading] = useState(false)
    const [Error, setError] = useState(null)

    useEffect(() => {
        async function GetData() {
            setLoading(true)
           try {
            let res = await axios.post("https://soccer-quiz-api.onrender.com/api/Questions", {currentQuestion} )
            setData(res.data)
            setLoading(false)
           } catch (err) {
            setLoading(false)
            setError(err)
           }
        }
        GetData()
    }, [currentQuestion])

  return {Data, Loading, Error}
}