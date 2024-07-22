import Footer from '@/modules/admin/layout/footer';
import Nav from '@/modules/admin/layout/nav';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
