import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import Signup from './pages/Signup';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/signup" element={<Signup/>}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register/>} />
        <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes> 
      
      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
