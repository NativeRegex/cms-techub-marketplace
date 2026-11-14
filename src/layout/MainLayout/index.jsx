import { Outlet } from 'react-router-dom';
import TechBackground from '../../components/TechBackground';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function MainLayout() {
  return (
    <>
      <TechBackground />
      <div className="layout-shell flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-12">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
