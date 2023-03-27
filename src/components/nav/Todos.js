import React, {useState, useEffect} from "react";
import TodoList from "../TodoList"

function Todos() {

    const [todos, setTodos] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{
        setTimeout(() =>{
            fetch('http://localhost:8000/todos')
        .then(res => {
            if (!res.ok){
                throw Error('could not fetch the data from that server');
            }
            return res.json()
        })
        .then((data => {
            setTodos(data);
            setLoading(false);
            setError(null);
        }))
        .catch(err => {
           setError(err.message);
           setLoading(false);
        })
        }, 1000);
    }, []); 

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