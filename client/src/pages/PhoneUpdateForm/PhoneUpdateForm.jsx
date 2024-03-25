import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updatePhone, getPhone } from "../../models/Phone";

export default function PhoneUpdateForm() {
  const { id } = useParams();
  const [phone, setPhone] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getPhone(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setPhone(data.payload);
      setLoaded(true);
    }
  };

  const postForm = async () => {
    const phone = await updatePhone(id, formData);
    if (phone.status === 200) {
      navigate(`/phone/${id}`);
    } else {
      setInfo(phone.msg);
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
        <p>Phone not found</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Phone is loading...</p>
      </>
    );
  }

  return (
    <>
      <h1>Phone update form</h1>
      <p>{id}</p>
      <form>
        <input
          type="text"
          defaultValue={phone.name}
          name="name"
          required
          placeholder="Enter phone name"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          defaultValue={phone.brand}
          name="brand"
          required
          placeholder="Enter brand"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          defaultValue={phone.ram}
          name="ram"
          required
          placeholder="Enter ram"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          defaultValue={phone.cpu}
          name="cpu"
          required
          placeholder="Enter cpu"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          defaultValue={phone.display}
          name="display"
          required
          placeholder="Enter display"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          defaultValue={phone.price}
          name="price"
          required
          placeholder="Enter price"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Update phone</button>
      </form>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
