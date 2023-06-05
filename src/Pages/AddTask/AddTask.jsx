import { useForm } from "react-hook-form";


const AddTask = () => {

    // react hook form is used to form validation
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const title = data.title
        const description = data.description
        const status = data.status
        const duration = data.duration
        console.log(title, description, status, duration)
    };
    return (
        <div className="mx-5 my-5">
            <h3>Add Your Task</h3>
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
                    <select className="form-select form-select-sm p-1 w-25"
                        {...register("duration", { required: true })} >
                        <option defaultValue disabled>Duration</option>
                        <option value="1">One day</option>
                        <option value="2">Two days</option>
                        <option value="3">Three days</option>
                        <option value="4">four days</option>
                        <option value="5">five days</option>
                    </select>
                    <select className="form-select form-select-sm p-1 w-25 ms-2 "
                        {...register("status", { required: true, maxLength: 20 })}>
                        <option defaultValue disabled>Status</option>
                        <option value='in-progress'>in progress</option>
                        <option value='completed'>Completed</option>
                    </select>
                </div>
                <input className="btn btn-success" type="submit" value='Add task' />
            </form>

        </div>
    );
};

export default AddTask;