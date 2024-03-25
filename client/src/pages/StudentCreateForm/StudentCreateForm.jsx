import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createStudent } from "../../models/Student";

export default function StudentCreateForm() {
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const student = await createStudent(formData);
    if (student.status === 201) {
      redirectToSuccessPage(student.payload._id);
    } else {
      setInfo(student.msg);
    }
  }
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }
  
  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  }

  const redirectToSuccessPage = (id) => {
    return navigate(`/createdstudent/${id}`)
  }

  return (
    <>
      <h1>Student create form</h1>
      <form>
        <input type="text" name="name" required placeholder="Enter student name" onChange={e => handleChange(e)}/>
        <input type="number" name="isic" required placeholder="Enter ISIC" onChange={e => handleChange(e)}/>
        <input type="text" name="classroom" required placeholder="Enter classroom" onChange={e => handleChange(e)}/>
        <button onClick={handlePost}>
          Create student
        </button>
      </form>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
