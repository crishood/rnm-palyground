import {  Link } from "react-router-dom";
const NotFound = () => {
    return (
        <div className="not-found">
            <h1> Are you lost homie ? </h1>
            <Link to="/">Go back 2 home</Link>
        </div>
    );
}

export default NotFound;