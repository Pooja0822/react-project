import Card from '../../components/Card/Card';
import { useData } from '../../context/Context';
import './Form.css'

export default function Form() {
  
  const {
    name,
    role,
    email,
    phone,
    course,
    status,
    setName,
    setRole,
    setEmail,
    setPhone,
    setCourse,
    setStatus,
    handleSubmit,
    message,
    studentsData
  } = useData();

  return (
    <>
      <section className="Form">
        {/* Form */}
        <div className="py-5 px-5">
          <form className="pt-5 " onSubmit={handleSubmit}>
            <h1 className="fw-bold Logo-text text-center text-3xl my-3">
              Fill This Form
            </h1>

            <div className="row m-0 p-0 px-3">
              <div className="col-12 col-md-6 row m-0 p-0 px-3 py-2">
                <label
                  className="Logo-text fw-bold p-0 text-3xl pb-1"
                  htmlFor="name"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="py-4 rounded-3"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="col-12 col-md-6 row m-0 p-0 px-3 py-2">
                <label
                  className="Logo-text fw-bold p-0 text-3xl pb-1"
                  htmlFor="role"
                >
                  Role:
                </label>
                <input
                  type="text"
                  id="role"
                  placeholder="Enter your role"
                  className="py-4 rounded-3"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
              </div>

              <div className="col-12 col-md-6 row m-0 p-0 px-3 py-2">
                <label
                  className="Logo-text fw-bold p-0 text-3xl pb-1"
                  htmlFor="email"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="py-4 rounded-3"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="col-12 col-md-6 row m-0 p-0 px-3 py-2">
                <label
                  className="Logo-text fw-bold p-0 text-3xl pb-1"
                  htmlFor="phoneNumber"
                >
                  Phone Number:
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  placeholder="Enter your phone number"
                  className="py-4 rounded-3"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="col-12 col-md-6 row m-0 p-0 px-3 py-2">
                <label
                  className="Logo-text fw-bold p-0 text-3xl pb-1"
                  htmlFor="course"
                >
                  Course:
                </label>
                <select
                  id="course"
                  className="py-4 rounded-3 fw-bold"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                >
                  <option value="">Select a course</option>
                  <option value="React Basics">React Basics</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="JavaScript Fundamentals">
                    JavaScript Fundamentals
                  </option>
                  <option value="Advanced CSS">Advanced CSS</option>
                  <option value="Backend Development">
                    Backend Development
                  </option>
                </select>
              </div>

              <div className="col-12 col-md-6 row m-0 p-0 px-3 py-2 ">
                <label
                  className="Logo-text fw-bold p-0 text-3xl pb-1"
                  htmlFor="status"
                >
                  Status:
                </label>
                <select
                  id="status"
                  className="py-4 rounded-3"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="">Select a status</option>
                  <option value="Placed">Placed</option>
                  <option value="Unplaced">Unplaced</option>
                </select>
              </div>
            </div>

            <div className="py-4 text-end pe-3">
              <button
                type="submit"
                className="me-3 btn rounded-pill py-3 px-4 border border-2 border-white text-white fw-bold"
                id="Submit-Btn"
              >
                Submit
              </button>
            </div>
          </form>
          <h5 className="text-warning text-center">{message}</h5>
        </div>

        {/* Form Data */}

        <div className="px-5 pb-5 row m-0">
          {studentsData.map((student, index) => (
            <div className=" col-12 col-md-6 col-lg-4 p-2" id="Card" key={index}>
              <Card student={student} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
