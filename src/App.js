import { Switch, Route, NavLink } from 'react-router-dom'

import Home from './Components/Home/Home'
import Posts from './Components/Posts/Posts'
import Comments from './Components/Comments/Comments'

import './App.css';

function App() {
  return (
    <>
      <NavLink to='/' >Home</NavLink>
      <NavLink to='/posts' >Posts</NavLink>
      <NavLink to='/albums' >Albums</NavLink>
      <NavLink to='/photos' >Photos</NavLink>
      <NavLink to='/todos' >Todos</NavLink>

      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/posts/' component={Posts} exact />
        <Route path='/comments/:id' component={Comments} exact />
      </Switch>
    </>
  );
}

export default App;
