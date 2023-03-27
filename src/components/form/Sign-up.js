import React, {useState} from 'react';
import './Form.css';
import { Login } from './Login';
import { Register } from './Register';

function Signin() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
      }
    return (
        <section className='sign-up'>
            {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
        </section>
     );
}

export default Signin;