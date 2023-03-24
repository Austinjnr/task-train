import React, {useState} from 'react';
import SignUp from './Signup';
import { Login } from './Login';

function Register() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
      }

    return ( 
        <div>
            {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <SignUp onFormSwitch={toggleForm} />
      }
        </div>
     );
}

export default Register;