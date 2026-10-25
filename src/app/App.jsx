import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../shared/layout/Navbar";
import Footer from "../shared/layout/Footer";
import HomePage from "../features/home/pages/HomePage";
import TeamsPage from "../features/teams/pages/TeamsPage";
import PlayersPage from "../features/players/pages/PlayersPage";
import "../App.css";

function App() {
  return (
    <>
      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/teamsPage" element={<TeamsPage />} />
          <Route path="/playersPage" element={<PlayersPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </>
  );
}

export default App;
