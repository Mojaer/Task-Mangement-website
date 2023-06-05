import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddTask from "../Pages/AddTask/AddTask";
import Home from "../Pages/Home/Home";
import UpdateTask from "../Pages/UpdateTask/UpdateTask";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/addTask",
                element: <AddTask></AddTask>
            },
            {
                path: "/updateTask/:id",
                element: <UpdateTask></UpdateTask>
            },
        ]
    },
]);

export default router;