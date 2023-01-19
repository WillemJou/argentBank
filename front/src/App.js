import './App.css';
import { HomePage } from './pages/homepage/homePage'
import { SignInPage } from './pages/signInPage/signInPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserPage } from './pages/userPage/userPage';
import { Error } from './pages/error/error';

export function App() {
  return (
    < BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage />}>
</Route>
<Route path="/sign-in" element={<SignInPage  />}>
  </Route>
  <Route path="/sign-up" element={<SignInPage props  />}>
  </Route>
  <Route path="/user" element={<UserPage  />}>
  </Route>
  <Route path="*" element={<Error message={<p>Error{<br/>}HTTP Request: URL Path</p>} />}>
  </Route>
    </Routes>
    </BrowserRouter>
  );
}
