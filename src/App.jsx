import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Results from "./pages/Results";
import PointsTable from "./pages/PointsTable";
import SargamPrathibha from "./pages/SargamPrathibha";

const App = () => {
  const [isCollapsed, setIsCollapsed] = useState(true); // Add state

  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <main
          className={`flex-1 p-4 transition-all duration-300 ${
            isCollapsed ? "ml-20" : "ml-64"
          }`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/results" element={<Results />} />
            <Route path="/points-table" element={<PointsTable />} />
            <Route path="/sargam-prathibha" element={<SargamPrathibha />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
