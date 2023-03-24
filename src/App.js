import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from './components/form/Register';
import Navbar from './components/navbar/Navbar';
import Home from './components/navbar/Home';
import Task from './components/navbar/Task';
import AddNew from './components/navbar/AddNew';

function App() {
  return (
    <div>
      <Register />
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact>
            <Home />
          </Route>
          <Route path="/Task" component={Task} exact>
            <Task />
            <Route path="/Addnew" component={AddNew} exact>
              <AddNew />
            </Route>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
