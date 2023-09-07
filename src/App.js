import './App.css';
import AuthRoute from './router/AuthRoute'
import ProtectedRoute from './router/ProtectedRoute'
import Signin from './pages/Signin/Signin'
import Signup from './pages/Signup/Signup'
import Dashboard from './Components/dashboard/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes >

          <Route exact path={"/"} element={<AuthRoute><Signin /></AuthRoute>} />
          <Route path={"/signup"} element={<AuthRoute><Signup /></AuthRoute>} />
          <Route path={"/Dashboard"} element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Routes>

      </BrowserRouter>

      {/* <Dashboard /> */}
      {/* <Signin/> */}
      {/* <Signup/> */}

    </div>
  );
}

export default App;
