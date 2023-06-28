import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/Navbar"; 
import DetailUserPage from "./pages/DetailUserPage";
import HomePage from "./pages/HomePage";
import { Routes, Route } from 'react-router-dom'
import NotFoundPage from "./pages/NotFoundPage";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, html {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  #root {
    height:100vh;
  }

  body {
    font-size: 16px;
    height: 100%;
    background: white;
    color: black;
  }

  .container {
    min-height: ${(props) => props.theme.heights.fullHeight};
    margin: 0 auto;
    padding: 50px 15px;
    max-width: 1200px;
  }

  a {
    text-decoration: none;
    color: black;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
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
