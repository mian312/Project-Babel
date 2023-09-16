import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  Routes,
  Route
} from 'react-router-dom';
import Landing from './pages/Landing/Landing.pg';
import DefaultLayout from './Layout/DefaultLayout';
import Auth from './pages/Auth/Auth.pg';

function App() {

  return (
    <DefaultLayout>
      <Routes>
        <Route path='/' Component={Landing} />
        <Route path='/auth' Component={Auth}/>
      </Routes>
    </DefaultLayout>
  )
}

export default App
