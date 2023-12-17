import React from "react";

export default function UserForm(){

    return(
        <div>
            <form id="form" action="" onSubmit={(event =>{
                const firstName = event.target.firstName.value
                const password = event.target.password.value
                localStorage.setItem('userData', JSON.stringify({
                    firstName: firstName, password: password
                }))
            })}>
                <label htmlFor="">userName</label>
                <input id="firstName" type="text" required placeholder="Yoer name" />
                <label htmlFor="">password</label>
                <input id="password" type="password" required placeholder="Yoer passowrd" />
                <label htmlFor="">stay log in</label>
                <label htmlFor="">phonNumber</label>
                <input type="number" />
                <input type="checbook" />
                <button>sudmit</button>  
            </form>
        </div>
    ) 
}