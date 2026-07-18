import { Routes, Route } from "react-router-dom";

import HomePage from "../features/home/pages/HomePage";
import TeamsPage from "../features/teams/pages/TeamsPage";
import PlayersPage from "../features/players/pages/PlayersPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/teams" element={<TeamsPage />} />
      <Route path="/players" element={<PlayersPage />} />
    </Routes>
  );
}

export default AppRouter;