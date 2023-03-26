import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './Navbar';
import Home from './Home';
import Todos from "./Todos";
import New from "./New";

function Navigation() {
    return (  
        <section>
            <Router>
                  <Nav />

                  <Switch>
                        <Route path='/' compoent={Home} exact>
                             <Home />
                        </Route>
                        <Route path='/todos' compoent={Todos} exact>
                             <Todos />
                        </Route>
                        <Route path='/new' compoent={New} exact>
                        <New />
                        </Route>
                    </Switch>
             </Router>
        </section>
    );
}

export default Navigation;