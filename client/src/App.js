import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import PostPage from './components/PostPage';
import ProjectsPage from './components/ProjectsPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/projectsPage" exact component={ProjectsPage} />
          <Route path="/postPage" exact component={PostPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
