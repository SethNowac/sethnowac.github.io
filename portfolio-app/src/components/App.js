import MainLayout from '../layouts/MainLayout';
import { ContactUs } from '../pages/ContactUs';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import './App.css';
import Header from './Header';
import Main from './Main';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>
          <Routes>
            <Route path='/' element={<MainLayout/>}>
              <Route index element={<Home/>}/>
              <Route path='/skills' element={<Skills />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/contact' element={<ContactUs />} />
              <Route path='*' element={<p>Invalid URL</p>}/>
            </Route>
          </Routes>
    </div>
  );
}

export default App;
