const TodoList = ({todos}) => {
    
    const handleClick = () => {
        fetch('http://localhost:8000/todos/' + todos.id, {
            method: 'DELETE',
        }).then(() => {});
    }

    return (  
        <section className="todo-list">
            {todos.map((task)=>(
                <div className='todo-preview' key={task.id}>
                    <h3>{task.title}</h3>
                    <p>Todos: {task.body}</p>
                   <button className="btn btn-outline-success">Edit</button> <button className="btn btn-outline-danger" onClick={handleClick}>Delete</button>
                </div>
            ))}
        </section>
    );
}
 
export default TodoList;
