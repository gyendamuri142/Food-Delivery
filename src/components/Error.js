import {useRouteError} from "react-router-dom"
export const Error = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1> THis is because you have custom error page</h1>
            <p>{err.status}</p>
        </div>
    )
}