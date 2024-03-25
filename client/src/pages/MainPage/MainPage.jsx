import "./MainPage.css";
import Content from "../../components/MainPage/Content";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <h1>Main page</h1>
      <Link to={"/createcat"}>
        <p>Create cat</p>
      </Link>
      <Link to={"/cats"}>
        <p>Cats</p>
      </Link>

      <br />

      <Link to={"/createstudent"}>
        <p>Create student</p>
      </Link>
      <Link to={"/students"}>
        <p>Students</p>
      </Link>
      
      <br />
      
      <Link to={"/createphone"}>
        <p>Create phone</p>
      </Link>
      <Link to={"/phones"}>
        <p>Phones</p>
      </Link>
    </>
  );
}
