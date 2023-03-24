import React, {useState} from "react";

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.login(email, password);
    }

    return ( 
        <section>
            <form className="login" onSubmit={handleSubmit}>
                <h3>Create an Account</h3>
                <div className="mb-3">
                    <lable for="yourEmailInput" className="form-lable">Email address</lable>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                </div>
                <div className="mb-3 form-check">
                 <lable for="yourPasswordInput" className="form-lable">Password</lable>
                 <input value={pass} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                </div>
                <button type="submit" className="btn btn-primary">Log In</button>
                <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
            </form>
        </section>
     );
}

export default Login;