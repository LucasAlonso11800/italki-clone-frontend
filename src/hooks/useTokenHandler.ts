import { API_BASE_URL, API_ROUTES } from "@/const";
import axios from "axios";
import { useEffect, useState } from "react";
import jwtDecode from 'jwt-decode';

const useTokenHandler = () => {
  const [accessToken, setAccessToken] = useState<string | null>(
    typeof(localStorage) !== 'undefined' ? localStorage.getItem("access_token") : null
  );
  const [refreshToken, setRefreshToken] = useState<string | null>(
    typeof(localStorage) !== 'undefined' ? localStorage.getItem("refresh_token") : null
  );

  // Function to set the access token and refresh token
  const setTokens = (newAccessToken: string, newRefreshToken: string) => {
    setAccessToken(newAccessToken);
    setRefreshToken(newRefreshToken);
  };

  // Function to clear the tokens
  const clearTokens = () => {
    setAccessToken(null);
    setRefreshToken(null);
    localStorage.clear();
  };

  // Function to refresh the access token using the refresh token
  const refreshAccessToken = async () => {
    try {
      const url = `${API_BASE_URL}/${API_ROUTES.auth.generate_refresh_token}`;
      const response = await axios.post(url, {}, { headers: { refresh_token: refreshToken } });
      if (response.data.code === 1 && response.headers.access_token) {
        setAccessToken(response.headers.access_token);
      } else {
        clearTokens();
      }
    } catch (error) {
      console.error("Error refreshing access token:", error);
      clearTokens();
    }
  };

  // Effect to check the validity of the access token
  useEffect(() => {
    if (!accessToken) return;
    const decodedToken: any = jwtDecode(accessToken);
    const isAccessTokenValid = decodedToken.exp * 1000 >= Date.now()

    if (!isAccessTokenValid && refreshToken) {
      refreshAccessToken();
    }
  }, [accessToken, refreshToken]);

  return {
    accessToken,
    refreshToken,
    setTokens,
    clearTokens,
  };
};

export default useTokenHandler;
