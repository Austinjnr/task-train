import React, {useState} from "react";

export const Login = (props) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return ( 
        <section>
            <form className="login" onSubmit={handleSubmit}>
                <h3>Welcome back</h3>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" className="form-control" />
                </div>
                <div className="mb-3 form-check">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Log In</button>
                <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
            </form>
        </section>
     );
}
