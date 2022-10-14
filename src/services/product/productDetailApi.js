import http from "../../utils/http";

const ProductDetailApi = async (props) => {
  const { id: _id } = props;
  const productResponse = await http.get(`/products/${_id}`);
  return productResponse.data;
};

export default ProductDetailApi;
