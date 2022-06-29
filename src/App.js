import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Chat from './Pages/Chat';
import Home from './Pages/Home';
import Error from './Pages/Error';
import './index.css';




function App() {
  return (
    <div className="App">
   <>
  <BrowserRouter>
<Routes>
<Route path='/sdfd' element={<Home/>}/>
<Route path='/' element={<Register/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/chats' element={<Chat/>}/>
<Route path='*' element={<Error/>}/>

</Routes>
</BrowserRouter>
   </>
    </div>
  );
}

export default App;
