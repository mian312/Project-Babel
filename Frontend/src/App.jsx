import { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

import {
  Routes,
  Route,
  Outlet,
  Navigate
} from 'react-router-dom';
import Landing from './pages/Landing/Landing.pg';
import DefaultLayout from './Layout/DefaultLayout';
import Auth from './pages/Auth/Auth.pg';
import DataProvider, { DataContext } from './context/DataProvider';
import Home from './pages/Home/Home.pg';
import Blog from './pages/Posts/Blog.pg';
import CreateBlog from './pages/Posts/CreateBlog.pg';

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  const token = sessionStorage.getItem('accessToken');
  return isAuthenticated && token ?
    <>
      <Outlet />
    </> : <Navigate replace to='/auth' />
};

function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(true);
  // const { account } = useContext(DataContext);

  useEffect(() => {
    const checkAuthentication = () => {
      const token = sessionStorage.getItem('accessToken');
      if (token) {
        isUserAuthenticated(true);
      } else {
        isUserAuthenticated(false);
      }
    };

    // Initial check when the component mounts
    checkAuthentication();

    const handleStorageChange = (event) => {
      if (event.key === 'accessToken') {
        checkAuthentication(); // Recheck authentication on storage change
      }
    };

    // Add an event listener to listen for changes in sessionStorage
    window.addEventListener('storage', handleStorageChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);



  return (
    <DataProvider>
      <DefaultLayout>
        <Routes>
          <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path='/' Component={Landing} />
          </Route>

          <Route path='/home' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path='/home' Component={Home} />
          </Route>

          {/* <Route path='/auth' element={<Auth isUserAuthenticated={isUserAuthenticated} />} /> */}
          <Route path='/auth' element={<Auth />} />
          <Route path='createPost' Component={CreateBlog}/>
        </Routes>
      </DefaultLayout>
    </DataProvider>
  )
}

export default App
