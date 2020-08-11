import React from 'react'
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom'
import Header from './Components/Navigation/Header/Header';
import Movies from './Routes/Movies/Movies';
import Tv from './Routes/Tv/Tv';
import Error from './Routes/Error/Error';
import Home from './Routes/Home/Home';
import CategoryPage from './Components/CategoryPage/CategoryPage';
import './App.css'
import Info from './Components/Info/Info';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect from="/" to="/home" />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route exact path="/tv">
            <Tv />
          </Route>
          <Route exact path="/:media/:query/page/:page">
            <CategoryPage />
          </Route>
          <Route path="/:media/:id/">
            <Info />
          </Route>
          <Route exact path="/error">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App
