import axios from "axios";
import { useState, createContext, useContext, useEffect } from "react";

// -------------create context
const DataContext = createContext();

// -------------create context provider
export const DataProvider = ({children}) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [studentsData, setStudentsData] = useState([]);
  const [totalStudents, setTotalStudents] = useState('');
  const [placedStudents, setPlacedStudents] = useState('');
  const [unPlacedStudents, setUnPlacedStudents] = useState('');

  // const Port = `http://localhost:4201`;
  const Port = `https://weboin-task-server.onrender.com`;

  // --- submit data
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      role,
      email,
      phone,
      course,
      status,
    };

    console.log("Form Data : ", formData);
    try {
      const response = await axios.post(`${Port}/form`, formData);

      if (response.status === 201 || response.status === 200) {
        setMessage("Form submitted successfully!");
        setName(""); // to clear the form entry
        setRole("");
        setEmail("");
        setPhone("");
        setCourse("");
        setStatus("");

        fetchData(); // to get the updated data
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setMessage("An error occurred while submitting the form.");
    }
  };

  // --- fetch data
  const fetchData = async () => {
    try {
      const response = await axios.get(`${Port}/form`);
      // console.log("Response data:", response.data);
      if (response.status === 200) {
        setStudentsData(response.data);
        // console.log("State updated with data:", response.data);
      }
    } catch (err) {
      console.error("Error fetching student data:", err);
    }
  };

  // handle the side effects while fetching the data
  useEffect(() => {
    fetchData();
  }, []);

  //--- log the data fetched from the DB
  // console.log( 'students data : ', studentsData); 

  //--- Display the message for 5 seconds and then clear it
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 5000); // Clear message after 5 seconds

      // Clean up the timer if the component unmounts or message changes
      return () => clearTimeout(timer);
    }
  }, [message]);

  //--- Delete Data 
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${Port}/form/${id}`);
      if (response.status === 200) {
        setStudentsData(studentsData.filter( student => student._id !== id ));
        // alert('Student Data deleted successfully');        
        console.log('Student Data deleted successfully');   
      }
    } catch (err) {
      console.error("Error deleting student data:", err);
    }
  };

  // to handle the side effects if once the studentsData is present then set the total no of students,placed,unplaced details 
  useEffect(() => {
    setTotalStudents(studentsData.length);
    const placed = studentsData.filter((student) => student.status === "Placed").length;
    setPlacedStudents(placed);
    const unplaced = studentsData.filter((student) => student.status === "Unplaced").length;
    setUnPlacedStudents(unplaced);
  }, [studentsData]);

  const contextValue = {
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
    studentsData,
    handleDelete,
    totalStudents,
    placedStudents,
    unPlacedStudents,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

// -------------create custom useContext 
export const useData = () => useContext(DataContext);
