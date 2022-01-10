import "./App.css";
import { Navbar } from "./components/Navbar";
import { TextForm } from "./components/TextUtils/TextForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Todo  from "./components/MyTodo/Todo";

function App() {
  
  return (
    <>
      <Router>
        <Navbar navTitle="Technical Coder" />
        <Switch>
          <Route exact path="/">
            <TextForm formTitle="Enter text to analyze" />
          </Route>
          <Route exact path="/mytodo">
            <div className="container">
            <Todo />
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
