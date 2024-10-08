import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from "../src/pages/Survey"
import Header from './components/Header'
import Error from "./components/Error"
import Results from "./pages/Results"
import Freelances from './pages/Freelances'

import './index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/survey/:num" element={<Survey />} />
                <Route path="/results" element={<Results/>}/>
                <Route path="/freelances" element={<Freelances/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </Router>
    </StrictMode>,
)
