import ProductPreviewCard from '@/components/ProductPreviewCard';
import useAllProducts from '@/hooks/use-all-products';
import useAuthStore from '@/store/use-auth-store';
import { useNavigate } from 'react-router-dom';

const AllProducts = () => {
  const { data: allProducts } = useAllProducts();
  const { isAdmin } = useAuthStore();
  const navigate = useNavigate();
  if (isAdmin) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto p-4 pt-16">
        {allProducts?.map((product) => (
          <ProductPreviewCard
            key={product._id}
            _id={product._id}
            image={product.image}
            name={product.name}
            createdAt={product.createdAt}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    );
  } else {
    navigate('/');
  }
};

export default AllProducts;
