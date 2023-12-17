import React, { useState } from "react";
import UserForm from "../UserForm";

export default function Login() {
    const [lopginView, setLoginView] = useState(true)
    return(
    <div id="form_2">
        {lopginView && <form id="insideForm" action="">
        <label htmlFor="">userName</label>
        <input type="text" required placeholder="Your  name" />
        <label htmlFor="">password</label>
        <input type="text" required placeholder="your password"/>
        <label htmlFor="">stay log in</label>
        <input type="checkbox" />
    <button onClick={()=>{setLoginView(false)}}>Login</button>
        </form>}
    {!lopginView && <UserForm/>}
    </div>
    )
}
