import { useData } from '../../context/Context';
import './DashBoard.css'

export default function DashBoard() {

  const {totalStudents, placedStudents, unPlacedStudents} = useData();

  return (
    <>
      <section className="Dashboard row m-0 text-white px-md-5 py-5">
        <div className="col-12 col-lg-6">
          <h2 className="fw-bold px-4">
            Empower your future with cutting-edge skills
            <p className="m-0 p-0">
              New, Embrace innovation, master technology, &amp; shape the
              digital world
            </p>
            Your journey to success starts here.
          </h2>
        </div>
        <div className="col-12 col-lg-6 row p-0 m-0 align-content-center px-4 px-md-0 pb-5 pb-lg-0 ">
          <p className="col-12 fw-bold py-5">
            Join our course with a proven track record of success, where
            learning isn't just about gaining skills; it's about growing them.
            Join us, learn with confidence, and watch your skills soar.
          </p>
          <div className='col-12 d-flex flex-row m-0 p-0'>
            <div className='col text-center px-1'>
              <p className='btn rounded-pill p-2 fw-bold d-inline-block'>
                Total Students
              </p>
              <h1 className='fw-bold'>
                {totalStudents}
              </h1>
            </div>
            <div className='col text-center px-1'>
              <p className='btn rounded-pill p-2 fw-bold d-inline-block'>
                Placed Students
              </p>
              <h1 className='fw-bold'>
                {placedStudents}
              </h1>
            </div>
            <div className='col text-center px-1'>
              <p className='btn rounded-pill p-2 fw-bold d-inline-block'>
                Unplaced Students
              </p>
              <h1 className='fw-bold'>
                {unPlacedStudents}
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
