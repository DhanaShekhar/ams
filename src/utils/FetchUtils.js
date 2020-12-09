/**
 * Backend API server addess.
 */
export const API_URL = "http://ec2-52-14-122-160.us-east-2.compute.amazonaws.com:8080/api/";

/**
 * Checks whether the request was success or failure; throws an Error in case 
 * status is not OK, which can then be handled in the .catch block. Returns the 
 * response as it is in case of success.
 */
export const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}