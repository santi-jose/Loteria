import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import SetupPage from './pages/SetupPage';
import GameplayPage from './pages/GameplayPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/setup" element={<SetupPage/> }/>
          <Route path="/gameplay" element={<GameplayPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
