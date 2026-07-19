import Navbar from "../shared/layout/Navbar";
import Footer from "../shared/layout/Footer";
import AppRouter from "./router";
import "../App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <AppRouter />
      </main>

      <Footer />
    </>
  );
}

export default App;