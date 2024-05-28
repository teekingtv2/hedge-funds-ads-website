import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdPage from './pages/AdPage';
import ImagesFooter from './components/ImagesFooter';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NotFound from './pages/404';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        // theme="colored"
      />
      <BrowserRouter>
        <div className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ad/:slug" element={<AdPage />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
        <ImagesFooter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
