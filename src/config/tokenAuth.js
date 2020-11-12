import aclienteAxios from "./axios";

const tokenAuth = (token) => {
  if (token) {
    aclienteAxios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete aclienteAxios.defaults.headers.common["x-auth-token"];
  }
};

export default tokenAuth;
