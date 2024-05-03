import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  const apiBasePath = process.env.API_BASE_PATH || '/fallback';

  return (
    <Router basename={apiBasePath}>
      <div>
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
};

const Home = () => {
  return <h1>Welcome to the Home Page</h1>;
};

export default App;
