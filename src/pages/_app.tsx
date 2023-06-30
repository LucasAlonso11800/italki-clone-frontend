import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { ConfigProvider } from "antd";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimaryBg: "#ff4438",
          colorPrimaryText: "#FFF",
          colorBgContainer: "#f5f6f9",
          colorBorder: "#f5f6f9",
          colorTextBase: "#515164",
        },
      }}
    >
      <Component {...pageProps} />
    </ConfigProvider>
  );
}
