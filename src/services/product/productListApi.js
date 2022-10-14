import http from "../../utils/http";

const productListApi = async () => {
  const productListResponse = await http.get("products/list");
  return productListResponse.data;
};

export default productListApi;
