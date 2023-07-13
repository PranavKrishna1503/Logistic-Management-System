import Home from './homepage';
import Login from './login';
// import './styles.css';
import { Route, Routes } from 'react-router-dom';
import Orders from './order';
import About from './About';
import Contact from './Contact';
function App() {
  return (
    <div className='app'>
<Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/orders' element={<Orders/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
</Routes>
</div>
  
  );
}

export default App;
