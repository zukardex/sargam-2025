import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import { Navbar } from './components/Navbar'
import Home from './pages/Home'
import Events from './pages/Events'
import Results from './pages/Results'
import PointsTable from './pages/PointsTable'
import SargamPrathibha from './pages/SargamPrathibha'
import Banner from './components/Banner'

const App = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-4">
            <Banner />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/results" element={<Results />} />
              <Route path="/points-table" element={<PointsTable />} />
              <Route path="/sargam-prathibha" element={<SargamPrathibha />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App