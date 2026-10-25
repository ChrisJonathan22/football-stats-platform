import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../features/home/pages/HomePage";
import TeamsPage from "../features/teams/pages/TeamsPage";
import PlayersPage from "../features/players/pages/PlayersPage";
import "../App.css";
import Layout from "../shared/layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/teamsPage" element={<TeamsPage />} />
            <Route path="/playersPage" element={<PlayersPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
