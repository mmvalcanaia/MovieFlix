import { Switch, Route, Router} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MovieDetails from './pages/MovieDetails';
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
                <Route path="/movies" exact>
                    <Movies />
                </Route>
                <Route path="/movies/1" exact>
                    <MovieDetails />
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;