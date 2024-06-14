import ProductCard from "./productcard";

const ProductPage = () => {
  return (
    <div className="mt-10 w-full bg-white rounded-lg p-4 grid grid-cols-1 place-items-center justify-items-center">
      <ProductCard name="Test" description="Test Description" price={123} />
    </div>
  );
};

export default ProductPage;
