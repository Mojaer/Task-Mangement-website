
import ReactQuery from "../../Providers/ReactQuery/ReactQuery";
import TaskList from "./TaskList";


const Tasklists = () => {

    const [tasks] = ReactQuery()
    // console.log(tasks)

    return (
        <div className="my-5">
            <h3 className="fw-bold my-4 text-center">Task List</h3>
            <ol className="list-group list-group-numbered mt-5">
                {
                    tasks.map((task) => < TaskList key={task._id} task={task} ></TaskList>
                    )
                }
            </ol>

        </div>
    );
};

export default Tasklists;