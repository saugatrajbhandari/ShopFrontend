import { Fragment } from "react";
import {Navigate} from "react-router-dom";

const LoginStatus = true;

const PrivateRoute = (props) => {
  const {children, ...other} = props;
  if(!LoginStatus) return <Navigate to="/" />

  return (
    <Fragment {...other}>{children}</Fragment>
  )
}

export default PrivateRoute;