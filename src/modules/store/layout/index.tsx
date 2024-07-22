import Footer from './footer';
import Navbar from './navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
