import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'swiper/css'
import 'swiper/css/bundle'
import './css/theme/global.css'
import './css/theme/qtec.css'
import './css/theme/animation.css'
import './css/theme/responsive.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
