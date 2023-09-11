import { React } from "react";


export default function Forms(props){
    return(
        <div>
            <h1>Login</h1>
            <form style={{textAlign:'center',lineHeight:"40px"}}>

                <label>Name:</label>
                <input
                type="text"
                name=""
                id=""
                />
                <br />
                <label>Password:</label>
                <input
                type="text"
                name=""
                id=""
                />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>

    );
}