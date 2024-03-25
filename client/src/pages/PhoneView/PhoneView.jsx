import { Link, useParams, useNavigate } from "react-router-dom";
import { getPhone, deletePhone } from "../../models/Phone";
import { useState, useEffect } from "react";

export default function PhoneView() {
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

  useEffect(() => {
    load();
  }, []);

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (phone.name === formData) {
      const data = await deletePhone(id);
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
      <h1>Phone view</h1>
      <p>{id}</p>
      <p>{phone.name}</p>
      <p>{phone.brand}</p>
      <p>{phone.ram}</p>
      <p>{phone.cpu}</p>
      <p>{phone.display}</p>
      <p>{phone.price}</p>
      <form>
        <input type="text" placeholder={phone.name} onChange={handleChange} />
        <button onClick={handleDelete}>Delete</button>
        <p>{info}</p>
      </form>
      <Link to={`/updatephone/${id}`}>
        <p>Update phone</p>
      </Link>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
