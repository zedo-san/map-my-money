import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import ThriftBrandIcon from './components/Icons/ThriftBrandIcon'
import HomeIcon from './components/Icons/HomeIcon'
import UserIcon from './components/Icons/UserIcon'
import Home from "./views/Home";

function App() {
    return (
        <div className="App">
            <div className="">
                <div className="flex"> 
                    <Router>
                        <Navbar />
                        <div className="h-full w-full bg-thrift-lightest bg-opacity-10 pt-8 px-10">
                            <Switch>
                                <Route exact path="/">
                                    <Home />
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

function Navbar() {
    const brandIcon = <ThriftBrandIcon />
    const userIcon = <UserIcon />
    const homeIcon = <HomeIcon />
    return (
        <div className="h-screen w-20 bg-thrift text-thrift-highlight px-1 py-8">
            <nav className="flex flex-col items-center justify-between h-full">
                {/* brand */}
                <div>
                    <Link to="/">
                        <div className="p-2 hover:bg-thrift-highlight hover:bg-opacity-30 rounded-full">
                            {brandIcon}
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col items-center space-y-5">
                    <Link to="/">
                        <NavbarLink linkIcon={homeIcon} />
                    </Link>
                    <Link to="/account">
                        <NavbarLink linkIcon={userIcon} />
                    </Link>
                </div>
            </nav>
        </div>
    )
}

function NavbarLink(props) {
    return (
        <div className="w-10 h-10 p-2 hover:bg-thrift-highlight hover:bg-opacity-30 rounded-full">
            {props.linkIcon}
        </div>
    )
}


export default App;
