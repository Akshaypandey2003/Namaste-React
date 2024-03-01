import { useState } from "react";
const User = ()=>{

     const[count] = useState(0);
    return <div className="user-card">
        <h1>{count}</h1>
        <h2> Name : Akshay</h2>
        <h3> Location : Shahdol</h3>
        <h4> contact : rakshaypandey@gmail.com</h4>
    </div>
}
export default User;