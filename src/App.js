import Navbar from './Components/Navbar/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import LandingPage from './Components/LandingPage/LandingPage';



function App() {
    return(
        <div className='App'>
            <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
            </Routes>
            </BrowserRouter>
        </div>
    )
}



export default App;
