import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateStudent, getStudent } from "../../models/Student";

export default function StudentUpdateForm() {
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

  const postForm = async () => {
    const student = await updateStudent(id, formData);
    if (student.status === 200) {
      navigate(`/student/${id}`);
    } else {
      setInfo(student.msg);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  useEffect(() => {
    load();
  }, []);

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
      <h1>Student update form</h1>
      <p>{id}</p>
      <form>
        <input
          type="text"
          defaultValue={student.name}
          name="name"
          required
          placeholder="Enter student name"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          defaultValue={student.isic}
          name="isic"
          required
          placeholder="Enter ISIC"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          defaultValue={student.classroom}
          name="classroom"
          required
          placeholder="Enter classroom"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Update student</button>
      </form>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
