import { StrictMode, useContext } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from "../src/pages/Survey"
import Header from './components/Header'
import Error from "./components/Error"
import Results from "./pages/Results"
import Freelances from './pages/Freelances'
import Footer from './components/Footer'
import { ThemeProvider } from './context/Context'
import Wrapper from './components/Wrapper'
import { AnswersProvider } from './context/Answers'

import './index.css'


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router>
            <ThemeProvider>
                <AnswersProvider>
                    <Wrapper>
                        <Header />
                        <main className="max-w-5xl m-auto p-8">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/survey/:num" element={<Survey />} />
                                <Route path="/results" element={<Results />} />
                                <Route path="/freelances" element={<Freelances />} />
                                <Route path="*" element={<Error />} />
                            </Routes>
                        </main>
                        <Footer />
                    </Wrapper>
                </AnswersProvider>
            </ThemeProvider>
        </Router>
    </StrictMode>,
)
