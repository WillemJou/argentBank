import './App.css';
import { HomePage } from './pages/homepage/homePage'
import { SignInPage } from './pages/signInPage/signInPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    < BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage />}>
</Route>
<Route path="/sign-in.html" element={<SignInPage  />}>
  </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
