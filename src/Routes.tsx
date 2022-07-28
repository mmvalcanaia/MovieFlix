import { Switch, Route, Router} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from './pages/Movies';
import history from './util/history';

const Routes = () => {
    return(
        <Router history={history}>
            <Navbar/>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/movies">
                    <Movies />
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;