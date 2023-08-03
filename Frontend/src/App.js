
import React , { BrowserRouter ,Routes,Route} from 'react';
import './App.css';
import RegistrationPage from './Components/Register/Register';
import { Link  } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
          {/* <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/admin-approval">Admin Approval</Link>
          </li> */}
        </ul>
      </nav>
      <Routes>
        <Route path="/register" element={<RegistrationPage />} />
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/admin-approval" element={<AdminApprovalPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
