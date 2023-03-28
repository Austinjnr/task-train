const TodoList = ({todos, pgReload}) => {

    const handleDelete = (todoId) => {
        fetch(' https://api.npoint.io/ec5f40ac50743ede4ff2' + todoId, {
            method: 'DELETE',
        }).then(() => {
            console.log('Task Deleted');
            const filteredTodos = todos.filter((todo) => todo.id !== todoId);
            pgReload(filteredTodos);
        });
    }

    return (  
        <section className="todo-list">
            {todos.map((task, index)=>(
                <div className='todo-preview' key={task.id + '-' + index}>
                        <div className="col row-cols-md-3 g-4" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <div className="todo-preview card">
                                <div className="card-body">
                                <h5 className="card-title">{task.title}</h5>
                                <p>Todos: {task.body}</p>
                                <button className="btn btn-outline-success">Edit</button> <button className="btn btn-outline-danger" onClick={() => handleDelete(task.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
 
export default TodoList;
