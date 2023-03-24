import React, {useState} from 'react';
import Login from './Login';
import SignUp from './Signup';

function Register() {
    const [currentForm, setCurrentForm] = useState('signup');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
      }

    return ( 
        <div>
            {
        currentForm === "signup" ? <SignUp onFormSwitch={toggleForm} /> : <Login onFormSwitch={toggleForm} />
      }
        </div>
     );
}

export default Register;