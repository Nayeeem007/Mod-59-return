import {useState } from "react";
import app from "../../Firebase/FIrebase.config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);


 
const Register = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")
    const [success, setSuccess] = useState("") 


 
    const handleSubmit = (event) => {
        event.preventDefault();
        setSuccess('');
        setError('')
        const Email = event.target.email.value;
        const Password = event.target.password.value
          console.log(Email,Password)
        //Validate

        if(!/(?=.*[A-Z])/.test(password)){
             setError('Please add at least one uppercase')
             return
        }
        else if(!/(?=.*[0-9].*[0-9])/.test(password)){
            setError('Please add two numbers at least');
            return
        }
        else if( password.length < 6){
            setError('Please add at least 6 characters in your password ');
            return 
        }

        //   Create user in Firebase
            createUserWithEmailAndPassword(auth,email,password)   
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError("");
                event.target.reset();
                setSuccess('User has been created successfully')
            })
            .catch(error => {
                console.error(error.message);
                setError(error.message);
            })


        // createUserWithEmailAndPassword(auth,email,password)
        // .then(result => {
        //     const loggedUser = result.user
        //     console.log(loggedUser);
        // })
        // .catch(error => {
        //     console.error(error);
        // })
    }

    const handleEmailChange = (event) => {
        // console.log(event.target.value);
        // setEmail(event.target.value)
    }

    const handlePasswordBlur = (event) => {
        // console.log(event.target.value);
        // setPassword(event.target.value)
    }

    return (
        <div className="w-50 mx-auto">
                <h2>Please Register</h2>
                <form onSubmit={handleSubmit} >
                    <input className="w-50 mb-4 rounded ps-2 "  onChange={handleEmailChange} type="email" name="email" id="email" placeholder="Please Enter Your E-mail" required />
                    <br />
                    <input className="w-50 mb-4 rounded ps-2" onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder="Enter Your Password"  required/>
                    <br />
                    <p className="text-danger">{error}</p>
                    <input className="btn btn-primary" type="submit" value="Register" />
                </form>
                <p className="text-success">{success}</p>
        </div>
    );
};

export default Register;