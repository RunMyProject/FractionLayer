/**
 * File: main.jsx
 * Author: Edoardo Sabatini
 * Date: 02-01-2026
 * Project: FractionLayer
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
