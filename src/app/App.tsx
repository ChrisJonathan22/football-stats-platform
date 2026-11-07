import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../features/home/pages/HomePage.tsx";
import TeamsPage from "../features/teams/pages/TeamsPage.tsx";
import TeamDetailsPage from "../features/teamsDetail/pages/TeamDetailsPage.tsx";
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
            <Route path="/teamDetailsPage" element={<TeamDetailsPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
