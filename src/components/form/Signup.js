import React, {useState} from "react";

function SignUp(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleSignUp(email, password, name);
    }

    return ( 
        <section>
            <form className="register-form" onSubmit={handleSubmit}>
                <h3>Create an Account</h3>
                <div className="mb-3"> 
                    <lable for="yourUserNameInput" className="form-lable">User Name</lable>
                    <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
                </div>
                <div className="mb-3">
                    <lable for="yourEmailInput" className="form-lable">Email address</lable>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                </div>
                <div className="mb-3 form-check">
                 <lable for="yourPasswordInput" className="form-lable">Password</lable>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" id="password" name="password" />
                </div>
                <button type="submit" className="btn btn-primary">Log In</button>
                <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
            </form>
        </section>
     );
}

export default SignUp;