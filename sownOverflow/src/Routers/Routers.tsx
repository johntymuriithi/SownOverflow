import { Routes as Switch, Route } from 'react-router-dom';
import LoginSignUp from '@/Features/Users/LoginSignUp';
import Entry from '@/App/Entry';
import SinglePost from '@/Features/Questions/SinglePost';

const Routes = () => (
  <Switch>
     <Route path="/" element={<Entry />} /> 
    <Route path="/logins" element={<LoginSignUp />} />
    <Route path="/question/:id" element={<SinglePost />} />
    {/* Add more routes here as needed */}
  </Switch>
);

export default Routes;
