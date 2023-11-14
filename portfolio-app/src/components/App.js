import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import './App.css';
import Header from './Header';
import Main from './Main';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div style={{ backgroundColor: 'white' }}>
        <Header />
        <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='*' element={<p>Invalid URL</p>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
