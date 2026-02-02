import { useState } from 'react'
import { ReactFlowProvider } from 'reactflow'
import FlowCanvas from './components/Canvas/FlowCanvas'
import LeftToolbar from './components/Toolbar/LeftToolbar'
import TopBar from './components/Toolbar/TopBar'
import ParametersPanel from './components/Parameters/ParametersPanel'
import QueuePanel from './components/Queue/QueuePanel'
import CreditsIndicator from './components/Credits/CreditsIndicator'
import './App.css'

function App() {
  // We can manage global state here if needed, but for now specific components handle their own UI state.
  return (
    <ReactFlowProvider>
      <div className="app-container">
        <main className="main-content full-screen">
          <div className="canvas-container">
            <TopBar />
            <LeftToolbar />
            <FlowCanvas />
            <CreditsIndicator />
            <ParametersPanel />
            <QueuePanel />
          </div>
        </main>
      </div>
    </ReactFlowProvider>
  )
}

export default App
