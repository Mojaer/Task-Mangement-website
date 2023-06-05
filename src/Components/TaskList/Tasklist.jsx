import axios from "axios";
import { Link } from "react-router-dom";
import ReactQuery from "../../Providers/ReactQuery/ReactQuery";
import { useState } from "react";
import Swal from "sweetalert2";


const TaskList = ({ task }) => {
    const { title, description, duration, status, _id } = task;
    const [activeStatus, setActiveStatus] = useState(false);
    const [, refetch] = ReactQuery()

    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://task-maneger-server-mojaer.vercel.app/task/${_id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0)
                            refetch()
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    })
            }
        })


    }
    const handleStatusUpdate = (event) => {
        event.preventDefault()
        const updatedStatus = { status: event.target.status.value }

        axios.patch(`https://task-maneger-server-mojaer.vercel.app/task/status/${_id}`, updatedStatus)
            .then((response) => {
                if (response.data.modifiedCount) {
                    refetch()
                    setActiveStatus(false)
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'status is updated successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else {
                    Swal.fire({
                        position: 'center',
                        icon: 'warning',
                        title: 'status is not updated ',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            })

    }


    return (
        <li className="list-group-item d-flex justify-content-between align-items-start py-4">
            <div className="ms-2 me-auto">
                <h4 className="fw-bold">{title}</h4>
                <p>{description}</p>
                <p><span className="fw-bold">duration:</span> {duration} day</p>
                {activeStatus ?
                    <form onSubmit={handleStatusUpdate} className="w-50 ms-2 ">
                        <label className="form-label fw-bold">Status:</label>
                        <select className="form-select form-select-sm p-1" name='status'>
                            <option value={status} disabled>{status}</option>
                            <option value='in-progress'>in progress</option>
                            <option value='pending'>pending</option>
                            <option value='completed'>Completed</option>
                        </select>
                        <input className="btn btn-sm btn-success" type="submit" value='Update' />
                    </form>
                    : <p><span className="fw-bold">Stats:</span> {status}
                        <span className="ms-4 "><button className="btn btn-sm btn-success" onClick={() => setActiveStatus(true)}>Change Status</button></span>
                    </p>}
            </div>
            <span className="badge bg-danger rounded-pill"><button className="btn btn-danger" onClick={handleDelete}>delete</button></span>
            <span className="badge bg-primary  rounded-pill ms-1"><Link to={`/updateTask/${_id}`} className="btn btn-primary " >Update</Link></span>
        </li>
    );
};

export default TaskList;