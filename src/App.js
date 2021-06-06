import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <div className="h-screen">
                <div className="flex h-full"> 
                    <Router>
                        <div className="h-full w-20 border">
                            <Link to="/">Home</Link>
                            <Link to="/account">Account</Link>
                        </div>
                        <div className="h-full w-full">
                            <Switch>
                                <Route exact path="/">
                                    <h1>Start thrifting now</h1>
                                </Route>
                                <Route path="/account">
                                    <h1>Account page</h1>
                                </Route>
                            </Switch>
                        </div>
                    </Router>
                </div>
            </div>
        </div>
    );
}

export default App;
