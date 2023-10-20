import { useState } from "react";
import app from "../../Firebase/FIrebase.config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";


const auth = getAuth(app)
const Login = () => {
const [error,setError] = useState('')
const [success,setSuccess] = useState('')

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    setError('')  ;
    setSuccess('')
    if  (/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError('Please add at least two uppercase')
      return;
    }
    else if (/(?=.*[!@#$&*])/.test(password)) {
      setError('Please add at  least one special character')
      return;
    }
    else if( password.length < 6) {
      setError('Password must be 6 characters long');
      return;
    }

    signInWithEmailAndPassword(auth,email,password)
    .then(result => {
      const loggedUser = result.user;
      setSuccess('User Login Successful.')
      setError(' ')
    })
    .catch(error => {
      setError(error.message)
    })



  }
 

  return (
    <div className="w-25 mx-auto ">
    <form onSubmit={handleLogin} >
    <h2>Please Login</h2>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name="password" className="form-control" id="exampleInputPassword1" required/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
<p><small>New to this website? Please <Link to='/register'>Register</Link></small></p>
<p className="text-danger">{error}</p>
<p className="text-success">{success}</p>
</div>
  );
};

export default Login;
