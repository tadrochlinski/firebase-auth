import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import GlobalStyles from './Components/GlobalStyles';

const App = () =>{
  return (
      <>
        <GlobalStyles/>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
        </Routes>
      </>
  );
}

export default App;
