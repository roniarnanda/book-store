import { Outlet } from 'react-router-dom';
import './index.css';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen max-w-screen-2xl mx-auto px-8 py-2 font-primary">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
