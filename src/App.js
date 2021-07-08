import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home  from "./components/Home";
import AddToDo  from "./components/add";
import EditToDo from "./components/edit";
// import Delete from "./components/delete";
// import { GlobalProvider } from "./context/GlobalState";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
     {/* <div style={{ maxWidth: "30rem", margin: "4rem auto" }}> */}
      {/* <GlobalProvider> */}    
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddToDo} />
            <Route path="/edit/:id" component={EditToDo} />
            {/* <Route path="/delete/:id" component={Delete} /> */}
          </Switch>
        </Router>
      {/* </GlobalProvider> */}
    </div>
  );
}

export default App;
