import { useState } from "react";

 
const Register = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [submit,setSubmit] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        const Email = event.target.email.value;
        const Password = event.target.password.value
          console.log(Email,Password)
    }

    const handleEmailChange = (event) => {
        // console.log(event.target.value);
        setEmail(event.target.value)
    }

    const handlePasswordBlur = (event) => {
        // console.log(event.target.value);
        setPassword(event.target.value)
    }

    return (
        <div>
                <h2>Please Register</h2>
                <form onSubmit={handleSubmit} >
                    <input onChange={handleEmailChange} type="email" name="email" id="email" placeholder="Please Enter Your E-mail" />
                    <br />
                    <input onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder="Enter Your Password" />
                    <br />
                    <input type="submit" value="Register" />
                </form>
        </div>
    );
};

export default Register;