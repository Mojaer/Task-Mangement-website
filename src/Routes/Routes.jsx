import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddTask from "../Pages/AddTask/AddTask";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/addTask",
                element: <AddTask></AddTask>
            }
        ]
    },
]);

export default router;