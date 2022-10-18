import AboutProductSkeleton from "../../../components/skeleton/AboutProductSkeleton";

const AboutProduct = (props) => {
  const { product, isLoading } = props;

  if (isLoading) return <AboutProductSkeleton />;

  return (
    <div className="md:flex">
      <div>
        <img
          className="aspect-[1/1.43] max-w-[250px] object-cover rounded-r-md"
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="mt-3 md:mt-0 ml-5">
        <h2 className="font-regular main-header">{product.name}</h2>
        <p className="font-regular md:mt-2">Rs {product.price}</p>
      </div>
    </div>
  );
};

export default AboutProduct;
