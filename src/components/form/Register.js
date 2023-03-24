import React, {useState} from 'react';
import './form.css'
import { SignUp } from './Signup';
import { Login } from './Login';

function Register() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
      }

    return ( 
        <div className='login-container'>
            {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <SignUp onFormSwitch={toggleForm} />
      }
        </div>
     );
}

export default Register;