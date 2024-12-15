import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dashboard from './Components/Dashboard.jsx'
import { BrowserRouter } from 'react-router-dom'
import Index from './Components/Index.jsx'
createRoot(document.getElementById('root')).render(
    <Index></Index>

    
,
)
