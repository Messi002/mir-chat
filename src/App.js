import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Chat from './Pages/Chat';
import Home from './Pages/Home';
import Error from './Pages/Error';




function App() {
  return (
    <div className="App">
   <>
  <BrowserRouter>
<Routes>
<Route path='/sdfd' element={<Home/>}/>
<Route path='/' element={<Register/>}/>
<Route path='/register' element={<Login/>}/>
<Route path='/register' element={<Chat/>}/>
<Route path='*' element={<Error/>}/>

</Routes>
</BrowserRouter>
   </>
    </div>
  );
}

export default App;
