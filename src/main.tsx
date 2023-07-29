import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import TriggerContextProvider from './context/TriggerContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TriggerContextProvider>
      <App />
    </TriggerContextProvider>
  </React.StrictMode>,
)
