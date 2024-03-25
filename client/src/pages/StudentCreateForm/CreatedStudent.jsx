import { Link, useParams } from "react-router-dom";

export default function CreatedStudent() {
  const { id } = useParams();  

  return (
    <>
      <p>Created student: { id }</p>
      <Link to={`/student/${id}`}>
        <p>View student</p>
      </Link>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
