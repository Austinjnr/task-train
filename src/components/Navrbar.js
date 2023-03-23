function Navbar() {
    return ( 
        <section>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <h1 className="navbar-brand">TaskTrain</h1>
                    <div className="d-flex">
                        <h5 className="me-2">Task</h5>
                        <h5 className="me-2">New task</h5>
                    </div>
                </div>
            </nav>
        </section>
     );
}

export default Navbar;