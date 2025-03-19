import Home from "./App.jsx";
import Signup from "./Components/Signup.jsx";
import Login from "./Components/Login.jsx";
import Logs from "./Components/Logs.jsx";

const router = [
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/signup",
        element: <Signup/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/admin/logs",
        element: <Logs/>
    }
]

export default router