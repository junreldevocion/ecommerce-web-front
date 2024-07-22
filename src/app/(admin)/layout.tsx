import Footer from '@/modules/admin/layout/footer';
import Navbar from '@/modules/admin/layout/navbar';
import Sidebar from '@/modules/admin/layout/sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="content-container h-[75vh] grid lg:grid-cols-5">
        <Sidebar />
        {children}
      </div>
      <Footer />
    </div>
  );
}
