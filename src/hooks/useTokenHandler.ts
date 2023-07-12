import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { refreshAccessToken } from "@/utils";

export default function useTokenHandler() {
  const [accessToken, setAccessToken] = useState<string | null>(
    typeof localStorage !== "undefined"
      ? localStorage.getItem("access_token")
      : null
  );
  const [refreshToken, setRefreshToken] = useState<string | null>(
    typeof localStorage !== "undefined"
      ? localStorage.getItem("refresh_token")
      : null
  );

  // Function to set the access token and refresh token
  const setTokens = (newAccessToken: string| null, newRefreshToken: string | null) => {
    setAccessToken(newAccessToken);
    setRefreshToken(newRefreshToken);
    if (typeof localStorage !== 'undefined' && newAccessToken && newRefreshToken){
      localStorage.setItem('access_token', newAccessToken)
      localStorage.setItem('refresh_token', newRefreshToken)
    }
  };

  // Function to clear the tokens
  const clearTokens = () => {
    setAccessToken(null);
    setRefreshToken(null);
    localStorage.clear();
  };

  // Effect to check the validity of the access token
  useEffect(() => {
    if (!accessToken) return;
    const decodedToken: any = jwtDecode(accessToken);
    const isAccessTokenValid = decodedToken.exp * 1000 >= Date.now();

    if (!isAccessTokenValid && refreshToken) {
      refreshAccessToken(refreshToken, setTokens, clearTokens);
    }
  }, [accessToken, refreshToken]);
  
  return {
    accessToken,
    refreshToken,
    setTokens,
    clearTokens
  };
}

