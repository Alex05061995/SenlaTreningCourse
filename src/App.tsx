import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import DetailUserPage from "./pages/DetailUserPage";
import HomePage from "./pages/HomePage";
import { Routes, Route } from 'react-router-dom'
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users/:id" element={<DetailUserPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
