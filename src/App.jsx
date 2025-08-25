import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Task from "./pages/Task";


function App() {
  return (
    <Router>
      <Header />
     <Routes>
  <Route path="/" element={<Landing />} />
  <Route path="/add" element={<Task />} /> 
</Routes>

      <Footer />
    </Router>
  );
}

export default App;
