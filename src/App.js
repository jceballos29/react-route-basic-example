
import { Fragment, useEffect, useState } from 'react';
import {BrowserRouter as Router, Link, Switch, Route, Redirect} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Post from './components/Post';
import { getEntries } from './services/getEntries';


function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const getData = async() => {
      const data = await getEntries();
      setEntries(data)
    }
    getData();
  }, [])


  const list = entries.map(entry => <li key={entry.id}><Link to={`/${entry.title}`}>{entry.title}</Link> - {entry.publishedAt}</li>)
  const routes = entries.map(entry => <Route key={entry.id} path={`/${entry.title}`}><Post id={entry.id} entries={entries}/></Route>)
  
  return (
    <Fragment >
      <Router>
          <Switch>
            {routes}
            <Route path="/home">
              <Home list={list}/>
            </Route>
            <Route path="/">
              <Redirect to="/home" />
            </Route>
          </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
