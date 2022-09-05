import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Reset from './Pages/Reset/Reset';
import GlobalStyles from './Components/GlobalStyles';
import { AuthContextProvider } from './Context/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute';

const App = () =>{
  return (
    <>
      <GlobalStyles/>
      <AuthContextProvider>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Register/>}></Route>
          <Route path="/changepassword" element={<Reset/>}></Route>
          <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
        </Routes>
      </AuthContextProvider>
    </>
  )
}

export default App;
