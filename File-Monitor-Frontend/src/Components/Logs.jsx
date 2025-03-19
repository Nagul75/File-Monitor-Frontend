import { useEffect } from "react"
import axios from 'axios'

export default function Logs() {
    useEffect(() => {
        axios.get("http://localhost:8000/admin/logs")
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return(
        <h1>Hello this is the logs page</h1>
    )
}