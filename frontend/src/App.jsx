import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import DashboardNavbar from './components/DashboardNavbar'; // 👈 new
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ViewDashboard from './pages/ViewDashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import Error from './pages/Error';
import { Logout } from './pages/Logout';

function LayoutWrapper() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <>
      {isDashboard ? <DashboardNavbar /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/dashboard" element={<ViewDashboard />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LayoutWrapper />
    </BrowserRouter>
  );
}

export default App;
