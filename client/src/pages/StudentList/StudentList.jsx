import { Link } from "react-router-dom";
import StudentLink from "./StudentLink";
import { useState, useEffect } from "react";
import { getStudents } from "../../models/Student";

export default function StudentList() {
  const [students, setStudents] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getStudents();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setStudents(data.payload);
      setLoaded(true);
    }
  }

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Students not found</p>
      </>
    )
  }

  if (!isLoaded) {
    return (
      <>
        <p>Students are loading...</p>
      </>
    )
  }

  return (
    <>
      <h1>Students list</h1>
      {
        students.map((student, index) => (
          <StudentLink key={index} {...student} />
        ))
      }
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
