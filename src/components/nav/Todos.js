import TodoList from "../TodoList"
import useFetch from "../usefetch";

function Todos() {

    const {data: todos, loading, error} = useFetch('http://localhost:8000/todos')

    return ( 
        <section className='nav-text'>
            <h2>List of todos</h2>
            {error && <p>{error}</p>}
            {loading && <p>Loading...</p>}
            {todos && <TodoList todos={todos} />}
        </section>
     );
}

export default Todos;