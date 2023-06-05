import axios from "axios";
import { Link } from "react-router-dom";
import ReactQuery from "../../Providers/ReactQuery/ReactQuery";
import { useState } from "react";


const TaskList = ({ task }) => {
    const { title, description, duration, status, _id } = task;
    const [activeStatus, setActiveStatus] = useState(false);
    const [, refetch] = ReactQuery()

    const handleDelete = () => {
        axios.delete(`http://localhost:3000/task/${_id}`)
            .then(response => {
                // console.log(response)
                refetch()
            })
    }
    return (
        <li className="list-group-item d-flex justify-content-between align-items-start py-4">
            <div className="ms-2 me-auto">
                <h4 className="fw-bold">{title}</h4>
                <p>{description}</p>
                <p><span className="fw-bold">duration:</span> {duration} day</p>
                {activeStatus ?
                    <form className="w-50 ms-2 ">
                        <label className="form-label fw-bold">Status:</label>
                        <select className="form-select form-select-sm p-1" name='status'>
                            <option value={status} disabled>{status}</option>
                            <option value='in-progress'>in progress</option>
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