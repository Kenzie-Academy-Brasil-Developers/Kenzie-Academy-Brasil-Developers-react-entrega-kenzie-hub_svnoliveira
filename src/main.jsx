import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './providers/UsersContext.jsx'
import { TechnologiesProvider } from './providers/TechnologiesContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <TechnologiesProvider>
          <App />
        </TechnologiesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
