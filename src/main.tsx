import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage.tsx'
import SetupPage from './pages/SetupPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SetupPage />
  </StrictMode>,
)
