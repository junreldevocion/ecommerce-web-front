import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function Cart() {
  return (
    <Link href="/Cart" className="text-sm font-medium text-gray-600 hover:text-gray-800 flex items-center gap-1">
      <ShoppingCart size={18} />
    </Link>
  );
}
