import React from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import About from "./pages/About"
import Support from "./pages/Support"
import LogIn from "./pages/LogIn"
import SignUp from "./pages/SignUp"
import MainPage from "./pages/MainPage"
import { useUserContext } from "./hooks/useUserContext"

export default function App() {
  const {user} = useUserContext()
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={!user ? <Home /> : <Navigate to="/diary" />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/support" element={<Support />}/>
          <Route path="/signup" element={!user ? <SignUp /> : <Navigate to="/" />} />
          <Route path="/diary" element={user ? <MainPage /> : <Navigate to="/login" />} />
          <Route path="/login" element={!user ? <LogIn /> : <Navigate to="/" />}/>
        </Routes>
      </Router>
    </div>
  );
}

