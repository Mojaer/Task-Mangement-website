import { useQuery } from "react-query";
import axios from "axios";



const ReactQuery = () => {

    // react query is used for state management
    const { data: tasks = [], refetch, isLoading: loading } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:3000/task')
            return res.data
        },

    })
    return [tasks, refetch, loading]
    // console.log(tasks)
};

export default ReactQuery;