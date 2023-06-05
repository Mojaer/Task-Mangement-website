import axios from "axios";
import { useForm } from "react-hook-form";
import ReactQuery from "../../Providers/ReactQuery/ReactQuery";
import { useParams } from "react-router-dom";
import loadingimg from "../../assets/loading.gif";


const UpdateTask = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [tasks, , loading] = ReactQuery()
    const { id } = useParams()

    if (loading) {
        return <div className="text-center"><img src={loadingimg} alt="image" /></div>
    }

    const updateTask = tasks.find(task => task._id == id)
    const { title, description, duration, status, _id } = updateTask

    const onSubmit = data => {
        const title = data.title
        const description = data.description
        const status = data.status
        const duration = data.duration
        const task = { title, description, status, duration }
        axios.patch(`http://localhost:3000/task/${_id}`, task)
            .then(res => {
                console.log(res)
            })
    };

    return (
        <div className="mx-5 my-5 fw-bold">
            <h3 className="my-5">Update Your Task</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3 w-50 ">
                    <label className="form-label">Task Title</label>
                    <input type="text" className="form-control w-100" defaultValue={title}
                        {...register("title", { required: true, maxLength: 50 })}
                    />
                    {errors.title && <span className="text-danger">Please insert Title</span>}
                </div>
                <div className="form-floating w-50 my-5">
                    <textarea className="form-control" placeholder="Leave a comment here" defaultValue={description}
                        {...register("description", { required: true, maxLength: 70 })}
                    ></textarea>
                    {errors.description && <span className="text-danger">Please describe your task</span>}
                    <label >Description</label>
                </div>
                <div className="d-flex justify-content-start my-5">
                    <div className="w-25">
                        <label className="form-label ">Duration</label>
                        <select className="form-select form-select-sm p-1 "
                            {...register("duration", { required: true })} >
                            <option value={duration} disabled defaultValue>{duration}</option>
                            <option value="1">One day</option>
                            <option value="2">Two days</option>
                            <option value="3">Three days</option>
                            <option value="4">four days</option>
                            <option value="5">five days</option>
                        </select>
                    </div>
                    <div className="w-25 ms-2">
                        <label className="form-label ">Status</label>
                        <select className="form-select form-select-sm p-1 "
                            {...register("status", { required: true, maxLength: 20 })}>
                            <option value={status} disabled>{status}</option>
                            <option value='in-progress'>in progress</option>
                            <option value='completed'>Completed</option>
                        </select>
                    </div>
                </div>
                <input className="btn btn-success" type="submit" value='Update task' />
            </form>

        </div>
    );
};

export default UpdateTask;