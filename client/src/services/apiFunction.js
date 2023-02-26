import { commonrequest } from "./apiCall";
import { BACKEND_URL } from "./helper";

//make sure your frontend api path should match with backend api path

export const registerFunction = async (data) => {
  return await commonrequest("POST", `${BACKEND_URL}/user/register`, data);
};

export const sentOtpFunction = async (data) => {
  return await commonrequest("POST", `${BACKEND_URL}/user/sendotp`, data);
};

export const userVerify = async (data) => {
  return await commonrequest("POST", `${BACKEND_URL}/user/login`, data);
};
