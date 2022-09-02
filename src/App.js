import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import GlobalStyles from './Components/GlobalStyles';
import { AuthContextProvider } from './Context/AuthContext';

const App = () =>{
  return (
    <>
      <GlobalStyles/>
      <AuthContextProvider>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Register/>}></Route>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </AuthContextProvider>
    </>
  )
}

export default App;
