import Link from 'next/link';

const Product = () => {
  return (
    <div className="content-container py-12 small:py-24">
      <div className="flex items-center justify-between">
        <p className="font-normal font-sans txt-medium text-lg">Latest drops</p>
        <Link href="/product/101" className="text-lg text-blue-600">View all</Link>
      </div>
    </div>
  );
};

export default Product;
