import { Link, useParams, useNavigate } from "react-router-dom";
import { getStudent, deleteStudent } from "../../models/Student";
import { useState, useEffect } from "react";

export default function StudentView() {
  const { id } = useParams();
  const [student, setStudent] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getStudent(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setStudent(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (student.name === formData) {
      const data = await deleteStudent(id);
      if (data.status === 200) {
        navigate("/");
      } else {
        setInfo(data.msg);
      }
    } else {
      setInfo("Wrong input!");
    }
  };

  if (isLoaded === null) {
    return (
      <>
        <p>Student not found</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Student is loading...</p>
      </>
    );
  }

  return (
    <>
      <h1>Student view</h1>
      <p>{id}</p>
      <p>{student.name}</p>
      <p>{student.isic}</p>
      <p>{student.classroom}</p>
      <form>
        <input type="text" placeholder={student.name} onChange={handleChange} />
        <button onClick={handleDelete}>Delete</button>
        <p>{info}</p>
      </form>
      <Link to={`/updatestudent/${id}`}>
        <p>Update student</p>
      </Link>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
