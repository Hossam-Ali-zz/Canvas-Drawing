import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import NavBar from './components/NavBar';
import Routes from './routes';

export default function App() {
  return (
    <Router>
      <NavBar />
      <React.Suspense fallback={<Spinner color="dark" />}>
        <Switch>
          {Routes.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              exact={route.exact}
              name={route.name}
              private={route.private}
              render={(props) => <route.component {...props} />}
            />
          ))}
        </Switch>
      </React.Suspense>
    </Router>
  );
}
