import Link from 'next/link';
import Cart from '../../cart';

const Navbar = () => {
  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="content-container flex items-center h-full w-full justify-between">
          <Link href="/" className="text-sm font-medium text-gray-600 uppercase hover:text-gray-800">JDev Store</Link>
          <div className="flex items-center gap-8">
            <Link href="/search" className="text-sm font-medium text-gray-600 hover:text-gray-800">Search</Link>
            <Link href="/account" className="text-sm font-medium text-gray-600 hover:text-gray-800">Acount</Link>
            <Cart />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
