function New() {
    return (  
        <section className='nav-text'> 
            <div className="card text-center mb-3" style = {{width: "50rem", margin: "0 auto"}}>
                <div className="card-body">
                    <h5 className="card-title">Add Task</h5>
                    <p className="card-text">Add a task to your todo list.</p>
                    <a href='/create' className="btn btn-outline-secondary">New Task</a>
                </div>
            </div>
        </section>
    );
}

export default New;