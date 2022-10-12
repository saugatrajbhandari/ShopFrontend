import { Fragment } from "react";
import {Navigate} from "react-router-dom";

const LoginStatus = true;

const PrivateRoute = (props) => {
  const {children, ...others} = props;
  if(!LoginStatus) return <Navigate to="/" />

  return (
    <Fragment {...others}>{children}</Fragment>
  )
}

export default PrivateRoute;