import { Routes as Switch, Route } from 'react-router-dom';
import LoginSignUp from '@/Features/Users/LoginSignUp';
import SinglePost from '@/Features/Questions/SinglePost';
import HomePage from '@/Components/HomePage';


const Routes = () => (
  <Switch>
     <Route path="/" element={<HomePage />} /> 
    <Route path="/logins" element={<LoginSignUp />} />
    <Route path="/question/:id" element={<SinglePost />} />
    {/* Add more routes here as needed */}
  </Switch>
);

export default Routes;
