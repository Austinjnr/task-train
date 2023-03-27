const TodoList = ({todos}) => {

    return (  
        <section className="todo-list">
            {todos.map((task)=>(
                <div className='todo-preview' key={task.id}>
                    <h3>{task.title}</h3>
                    <p>Todos: {task.body}</p>
                     <span></span>
                    <button className="btn btn-outline-success">Edit</button>
                </div>
            ))}
        </section>
    );
}
 
export default TodoList;