function Login() {
    return ( 
        <section>
            <form>
                <h3>Welcome back!</h3>
                <div className="mb-3">
                    <lable for="yourEmailInput" className="form-lable">Email address</lable>
                    <input type="email" className="form-control" id="yourEmailInput" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="mb-3 form-check">
                <lable for="yourPasswordInput" className="form-lable">Password</lable>
                    <input type="password" className="form-control" id="yourPasswordInput" aria-describedby="passwordHelp" placeholder="********" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <button>Don't have an account, sign up here!</button>
            </form>
        </section>
     );
}

export default Login;