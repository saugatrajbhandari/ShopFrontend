import http from "../../utils/http";

const registerApi = async (props) => {
  const {
    firstName: first_name,
    lastName: last_name,
    email,
    password,
    repeatPassword: password2,
  } = props;

  const registerResponseData = await http.post("/account/register/", {
    first_name,
    last_name,
    email,
    password,
    password2,
  });

  return registerResponseData;
};

export default registerApi;
