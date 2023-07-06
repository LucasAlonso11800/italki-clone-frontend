import axios, { AxiosRequestConfig } from "axios";
import { API_BASE_URL, API_ROUTES } from "./const";
import Router from "next/router";

export const authenticatedCall = async (
  options: AxiosRequestConfig,
  setTokens: (newAccessToken: string, newRefreshToken: string) => void,
  clearToken: () => void
) => {
  try {
    options.validateStatus = (status) => status === 200 || status === 401;
    const response = await axios(options);
    if (response.status === 200) {
      return response.data;
    }

    if (options.headers && options.headers["refresh-token"]) {
      // If the request failed due to authentication and a refresh token is available
      const newAccessToken = await refreshAccessToken(
        options.headers["refresh-token"],
        setTokens,
        clearToken
      );
      if (!newAccessToken) {
        console.error("Error generating new access token");
        return Router.push("/");
      }
      // Retry the API call with the new access token
      options.headers["authorization"] = newAccessToken;
      return (await axios(options)).data;
    } else {
      console.error("No refresh token present");
      return Router.push("/");
    }
  } catch (error: any) {
    if (error.response) {
      return error.response.data;
    } else {
      return Router.push("/");
    }
  }
};

// Function to refresh the access token using the refresh token
export const refreshAccessToken = async (
  refreshToken: string,
  setTokens: (newAccessToken: string, newRefreshToken: string) => void,
  clearTokens: () => void
) => {
  try {
    const url = `${API_BASE_URL}/${API_ROUTES.auth.verify_refresh_token}`;
    const response = await axios.post(url, null, {
      headers: { authorization: refreshToken },
    });
    if (response.data.code === 1 && response.headers.access_token) {
      setTokens(response.headers.access_token, refreshToken);
      return response.headers.access_token;
    } else {
      clearTokens();
    }
  } catch (error) {
    console.error("Error refreshing access token:", error);
    clearTokens();
  }
};
