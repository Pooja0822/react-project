import { useData } from '../../context/Context';
import './Card.css'
import Avatar from "@mui/material/Avatar";

export default function Card(props) {

  const {handleDelete} = useData();

  return (
    <>
        <div className="bg-white rounded-3 p-4">
          <div className="d-flex flex-row mb-3">
            <Avatar id="Avatar" className='text-capitalize'>{props.student.name[0]}</Avatar>
            <div className="m-0 align-content-center ps-2">
              <span className="fs-5 fw-semibold text-capitalize">{props.student.name}</span>
            </div>
          </div>

          <div className="">
            <p className="my-2 text-capitalize">
              <strong>Role:</strong> {props.student.role}
            </p>
            <p className="my-2">
              <strong>Email:</strong> {props.student.email}
            </p>
            <p className="my-2">
              <strong>Phone Number:</strong> {props.student.phone}
            </p>
            <p className="my-2">
              <strong>Course:</strong> {props.student.course}
            </p>
            <p className="my-2">
              <strong>Status:</strong> {props.student.status}
            </p>
          </div>
          <button className="bg-danger border-0 py-1 rounded text-white w-100 mt-3"
            onClick={() => handleDelete(props.student._id)}
          >
            Delete
          </button>
        </div>
    </>
  );
}
