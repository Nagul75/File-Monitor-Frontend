import { useEffect, useState } from "react"
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material"
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import "../styles/Logs.css"
import axios from 'axios'

export default function Logs() {
    const [logs, setLogs] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/admin/logs")
            .then((res) => {
                setLogs(res.data.logs)
                console.log(res.data.logs)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return(
    <>
        <AppBar sx={{backgroundColor: 'rgb(58,58,58)', padding: '15px'}}>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <AccountBalanceIcon fontSize="large" sx={{color: 'pink'}}></AccountBalanceIcon>
                <Typography variant="h3">Generic Website</Typography>
                <Typography></Typography>
                <Button variant="text" color="inherit" size="large" href="/">Home</Button>
            </Box>
        </AppBar>

        <Box>
            <ul>
                {Array.isArray(logs) && logs.map((log, index) => (
                    <li key={index}><Typography variant="h6" color="white">{log}</Typography></li>
                ))}
            </ul>
        </Box>
    </>
    )
}