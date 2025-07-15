import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './Components/Add';
import View from './Components/View';
import Search from './Components/Search';
import Delete from './Components/Delete';

function App() {
  return (
    <div >

      <BrowserRouter>
      <Routes>

        <Route path='/' element={<Add/>}/>
        <Route path='/view' element={<View/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/delete' element={<Delete/>}/>

  
      </Routes>
      
      </BrowserRouter>
 
    </div>
  );
}

export default App;
