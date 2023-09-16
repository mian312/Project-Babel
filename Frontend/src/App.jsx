import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  Routes,
  Route
} from 'react-router-dom';
import Landing from './pages/Landing/Landing.pg';
import DefaultLayout from './Layout/DefaultLayout';

function App() {

  return (
    <DefaultLayout>
      <Routes>
        <Route path='/' Component={Landing} />
      </Routes>
    </DefaultLayout>
  )
}

export default App
