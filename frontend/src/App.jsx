// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Logout } from "./pages/Logout";
import ViewDashboard from "./pages/ViewDashboard";
import Navbar from "./components/Navbar"; // Reused for about/contact
import DashboardNavbar from "./components/DashboardNavbar";
import InternshipForm from "./pages/InternshipForm"
import CardDetails from "./pages/CardDetails";

const filters = [
  {
    id: "Domain",
    name: "Domain",
    options: [
      { value: "ai", label: "AI" },
      { value: "fullstack", label: "Fullstack" },
      { value: "cybersecurity", label: "Cybersecurity" },
    ],
  },
  {
    id: "Company",
    name: "Company",
    options: [
      { value: "tata", label: "Tata" },
      { value: "karoninfotech", label: "Karoninfotech" },
    ],
  },
  {
    id: "Year",
    name: "Year",
    options: [
      { value: 2024, label: "2024" },
      { value: 2025, label: "2025" },
      { value: 2026, label: "2026" },
      { value: 2027, label: "2027" },
    ],
  },
  {
    id: "Type",
    name: "Type",
    options: [
      { value: "internship", label: "Internship" },
      { value: "researchproject", label: "Researchproject" },
    ],
  },
];

function App() {
  return (
    <Router>
      <Routes>
        {/* Home: special layout with modal, so not wrapped */}
        <Route path="/" element={<Home />} />

        {/* Public pages use shared navbar but no modal */}
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About/>
              <div className="p-4">This is About Page</div>
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact/>
              <div className="p-4">This is Contact Page</div>
            </>
          }
        />
        <Route
  path="/add-details"
  element={
    <>
      
      <InternshipForm />
    </>
  }
/>
        {/* Dashboard - different navbar */}
        <Route
          path="/dashboard"
          element={
            <>
              
             <ViewDashboard filters={filters} />
            </>
          }
        />
        <Route
          path="/internships/:id"
          element={
            <>
            
              <CardDetails />
            </>
          }
        />

         <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
