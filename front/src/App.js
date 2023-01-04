import './App.css';
import { HomePage } from './pages/homepage/homePage'
import { SignInPage } from './pages/signInPage/signInPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserPage } from './pages/userPage/userPage';

function App() {
  return (
    < BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage />}>
</Route>
<Route path="/sign-in" element={<SignInPage  />}>
  </Route>
  <Route path="/user" element={<UserPage  />}>
  </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
