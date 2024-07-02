import type { Metadata } from "next";

import "./styles/globals.css";
import "./styles/index.css";
import "@rainbow-me/rainbowkit/styles.css";
import "@mantine/core/styles.css";
import WagmiProviderComp from "@/lib/wagmiProvider";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { config } from "@/lib/config";
import { DirectionProvider, MantineProvider } from "@mantine/core";
import { Montserrat } from "next/font/google";
import NavBar from "./shared/NavBar";
import { theme } from "./theme";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vampire Attack",
  description: "Vampire Attack WebApp",
  icons: [
    {
      url: "/apple-touch-icon.png",
      rel: "apple-touch-icon",
      sizes: "180x180",
    },
    {
      url: "/favicon-32x32.png",
      rel: "icon",
      sizes: "32x32",
      type: "image/png",
    },
    {
      url: "/favicon-16x16.png",
      rel: "icon",
      sizes: "16x16",
      type: "image/png",
    },
    {
      url: "/safari-pinned-tab.svg",
      rel: "mask-icon",
      color: "#5bbad5",
    },
  ],
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));

  return (
    <html lang="en">
      <body>
        <DirectionProvider>
          <MantineProvider theme={theme} defaultColorScheme="dark">
            <WagmiProviderComp initialState={initialState}>
              <main className={montserrat.className}>
                <NavBar />
                <div className="w-full text-white flex flex-col items-center p-4">
                  {children}
                </div>
              </main>
            </WagmiProviderComp>
          </MantineProvider>
        </DirectionProvider>
      </body>
    </html>
  );
}
