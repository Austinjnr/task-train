import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [status, setStatus] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const todo = {title, body, status};

        setIsPending(true)

        fetch('http://localhost:8000/todos',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        }).then(()=>{
            console.log('new task added successfully')
            setIsPending(false)
            history.push('/todos')
        })
    }

    return (  
        <div className="create">
            <h2>Add a New Task</h2>
            <form onSubmit={handleSubmit}>
                <lable>Todo title:</lable>
                <input 
                type="text" 
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <lable>Todo body:</lable>
                <textarea 
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                    >
                </textarea>
                <lable>Todo status:</lable>
                <select 
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                >
                    <option value='LOW'>LOW</option>
                    <option value='MEDIUM'>MEDIUM</option>
                    <option value='MEDIUM'>HIGH</option>
                </select>
                { !isPending && <button>Add Task</button> }
                { isPending && <button disabled>Adding ....</button>}
            </form>
        </div>
    );
}
 
export default Create;