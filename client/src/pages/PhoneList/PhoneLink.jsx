import { Link } from "react-router-dom"

export default function PhoneLink(props) {
   
    return (
        <>
            <Link to={`/phone/${props._id}`}>
                <p>{props.name}</p>
            </Link>
        </>
    )
}