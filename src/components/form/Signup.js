import React, { useState } from "react";

function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <section>
      <form className="register-form" onSubmit={handleSubmit}>
        <h3>Create an Account</h3>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">User Name</label>
          <input
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="Full Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
        </div>
        <div className="mb-3 form-check">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
        <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
          Already have an account? Login here.
        </button>
      </form>
    </section>
  );
}

export default SignUp;
