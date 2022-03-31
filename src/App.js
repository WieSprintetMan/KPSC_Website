import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from './components';
import { Home, Imprint, Solution, References, Company, Contact } from './pages'
import { Footer } from './container'
//import { useTranslation } from 'react-i18next';
function App() {
    //const { t } = useTranslation()
    return (<
        Router >
        <Navbar />
        <Routes >
            <Route path="/" element={< Home />} />
            <Route path="/imprint" element={< Imprint />} />
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/jobs" />
            <Route path="/agb" />
            <Route path="/data-protection" />
            <Route path="/MSdata-protection" />
            <Route path='/solution' element={< Solution />} />
            <Route path="/references" element={<References/>} />
            <Route path="/support" />
            <Route path="/company" element={<Company/>}/>
        </Routes>
        <Footer />
    </Router>
    );
}

export default App;