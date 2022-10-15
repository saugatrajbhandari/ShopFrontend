import http from "../../utils/http";

const productListApi = async (props) => {
  const { limit = 4 } = props || {};
  const productListResponse = await http.get("products/list", {
    params: {
      limit,
    },
  });
  return productListResponse.data;
};

export default productListApi;
