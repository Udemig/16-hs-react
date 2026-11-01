import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import dayjs from 'dayjs'
import 'dayjs/locale/tr.js'

// tarih formatı tüm uygulamada türkçe olsun
dayjs.locale('tr')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
