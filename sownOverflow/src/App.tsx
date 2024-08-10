import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routers/Routers'; // Importing your Routes component

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
