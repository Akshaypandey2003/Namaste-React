import { useRouteError } from "react-router-dom";
const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    return(
       <div>
        <h1>This is error page inside namaste react application</h1>
        <h2>
            This is my erro page inside namaste react application
        </h2>
        <h3>
            {err.status}:{err.statusText}
        </h3>
       </div>
    );
}
export default Error;