import { useState } from "react";
import { createRoot } from "react-dom/client";

/* ------------------ PAGES ------------------ */

function HomePage({ go }) {
  return (
    <div style={{ padding: 80 }}>
      <h1>Elite Dental</h1>
      <button onClick={() => go("booking")}>Book Appointment</button>
      <br /><br />
      <button onClick={() => go("login")}>Login</button>
    </div>
  );
}

function BookingPage({ go }) {
  return (
    <div style={{ padding: 80 }}>
      <h1>Booking</h1>
      <button onClick={() => go("home")}>Back Home</button>
    </div>
  );
}

function LoginPage({ onLogin }) {
  return (
    <div style={{ padding: 80 }}>
      <h1>Login</h1>
      <button onClick={() => onLogin("admin")}>Login as Admin</button>
      <br /><br />
      <button onClick={() => onLogin("patient")}>Login as Patient</button>
    </div>
  );
}

function AdminDashboard({ go }) {
  return (
    <div style={{ padding: 80 }}>
      <h1>Admin Dashboard</h1>
      <button onClick={() => go("home")}>Home</button>
    </div>
  );
}

function PatientPortal({ go }) {
  return (
    <div style={{ padding: 80 }}>
      <h1>Patient Portal</h1>
      <button onClick={() => go("home")}>Home</button>
    </div>
  );
}

/* ------------------ APP ------------------ */

function App() {
  const [page, setPage] = useState("home");
  const [role, setRole] = useState(null);

  function go(next) {
    setPage(next);
  }

  function login(r) {
    setRole(r);
    setPage(r === "admin" ? "admin" : "portal");
  }

  switch (page) {
    case "booking":
      return <BookingPage go={go} />;
    case "login":
      return <LoginPage onLogin={login} />;
    case "admin":
      return role === "admin"
        ? <AdminDashboard go={go} />
        : <LoginPage onLogin={login} />;
    case "portal":
      return role === "patient"
        ? <PatientPortal go={go} />
        : <LoginPage onLogin={login} />;
    default:
      return <HomePage go={go} />;
  }
}

/* ------------------ BOOTSTRAP ------------------ */

const root = document.getElementById("root");
createRoot(root).render(<App />);
