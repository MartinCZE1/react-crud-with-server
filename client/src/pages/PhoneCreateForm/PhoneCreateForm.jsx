import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createPhone } from "../../models/Phone";

export default function PhoneCreateForm() {
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const phone = await createPhone(formData);
    if (phone.status === 201) {
      redirectToSuccessPage(phone.payload._id);
    } else {
      setInfo(phone.msg);
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
    return navigate(`/createdphone/${id}`)
  }

  return (
    <>
      <h1>Phone create form</h1>
      <form>
        <input type="text" name="name" required placeholder="Enter phone name" onChange={e => handleChange(e)}/>
        <input type="text" name="brand" required placeholder="Enter brand" onChange={e => handleChange(e)}/>
        <input type="number" name="ram" required placeholder="Enter RAM" onChange={e => handleChange(e)}/>
        <input type="text" name="cpu" required placeholder="Enter CPU" onChange={e => handleChange(e)}/>
        <input type="text" name="display" required placeholder="Enter display" onChange={e => handleChange(e)}/>
        <input type="number" name="price" required placeholder="Enter price" onChange={e => handleChange(e)}/>
        <button onClick={handlePost}>
          Create phone
        </button>
      </form>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
