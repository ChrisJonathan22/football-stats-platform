import React from "react";
import LeaguesDropdown from "../../../shared/ui/LeaguesDropdown";

function HomePage() {
  return (
    <div>
      <h1>Welcome to Football Stats</h1>
      <p>Latest standings and upcoming fixtures from around the world.</p>
      <LeaguesDropdown />
    </div>
  );
}

export default HomePage;
