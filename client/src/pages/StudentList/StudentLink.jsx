import { Link } from "react-router-dom"

export default function StudentLink(props) {
   
    return (
        <>
            <Link to={`/student/${props._id}`}>
                <p>{props.name}</p>
            </Link>
        </>
    )
}