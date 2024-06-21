import { useRouteError } from "react-router-dom"; // Give more info about error
const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1> Oops!!! </h1>
            <h2> something went wrong...! </h2>
            <h3> {err.status}</h3> //* err from useRouteError *//
            <h3> {err.statusText}</h3>
        </div>
    );
};

export default Error;
