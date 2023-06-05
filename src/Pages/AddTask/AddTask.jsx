import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";



const AddTask = () => {

    // react hook form is used to form validation
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const title = data.title
        const description = data.description
        const status = data.status
        const duration = data.duration
        const task = { title, description, status, duration }
        axios.post('https://task-maneger-server-mojaer.vercel.app/task', task)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your task is added successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    };
    return (
        <div className="mx-5 my-5 fw-bold">
            <h3 className="my-5">Add Your Task</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3 w-50 ">
                    <label className="form-label">Task Title</label>
                    <input type="text" className="form-control w-100"
                        {...register("title", { required: true, maxLength: 50 })}
                    />
                    {errors.title && <span className="text-danger">Please insert Title</span>}
                </div>
                <div className="form-floating w-50 my-5">
                    <textarea className="form-control" placeholder="Leave a comment here"
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
                            <option value='in-progress'>in progress</option>
                            <option value='pending'>Pending</option>
                            <option value='completed'>Completed</option>
                        </select>

                    </div>



                </div>
                <input className="btn btn-success" type="submit" value='Add task' />
            </form>

        </div>
    );
};

export default AddTask;