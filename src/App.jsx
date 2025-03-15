import React from 'react'
import { Sidebar } from './components/Sidebar'
import { Navbar } from './components/Navbar'
import Banner from './components/Banner'

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">
          {/* Main content will go here */}
          <Banner />
        </main>
      </div>
    </div>
  )
}

export default App