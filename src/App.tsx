import './index.scss';
import Navbar from './components/Navbar/Navbar';
import { useAppDispatch } from './hooks/redux';
import UsersList from './components/UsersList/UsersList';
import { useEffect } from 'react';
import { fetchUserById } from './store/actions/usersAction';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import DetailsPageUsers from './pages/DetailsPageUsers';
import NotFoundPage from './pages/NotFoundPage';

function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserById())
  })
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main className='container'>
          <Routes>
            <Route element={<HomePage />} path='/' />
          </Routes>
          <Routes>
            <Route element={<DetailsPageUsers />} path='/users/:id' />
          </Routes>
          {/* <Routes>
            <Route path='*' element={<NotFoundPage />}/>
          </Routes> */}
        </main>
      </div>
    </BrowserRouter>

  );
}

export default App;
