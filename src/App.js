import './css/style.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/contexts/AuthContext";
import Homepage from './components/Homepage';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';
import ProtectedRoutes from './ProtectedRoute';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename=''>
        <AuthProvider>
          <Routes>
            <Route exact path='/' element={<Homepage/>}/>
            <Route exact path='/signup' element={<SignUp/>}/>
            <Route exact path='/login' element={<LogIn/>}/>
            <Route element={<ProtectedRoutes/>}>
              <Route path='/dashboard' element={<Dashboard/>}/>
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
