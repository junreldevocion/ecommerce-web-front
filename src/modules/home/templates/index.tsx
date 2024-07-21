import Layout from '@/modules/layout';
import Hero from '../components/hero';
import FeaturedProducts from '../components/featured-products';

const HomeTemplate = () => {
  return (
    <Layout>
      <Hero />
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts />
        </ul>
      </div>

    </Layout>
  );
};

export default HomeTemplate;
