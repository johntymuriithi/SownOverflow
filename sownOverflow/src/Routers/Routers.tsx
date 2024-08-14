import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import LoginSignUp from '@/Features/Users/LoginSignUp';
import Entry from '@/App/Entry';

const Routes = () => (
  <Switch>
     <Route path="/" element={<Entry />} /> 
    <Route path="/logins" element={<LoginSignUp />} />
    {/* Add more routes here as needed */}
  </Switch>
);

export default Routes;
