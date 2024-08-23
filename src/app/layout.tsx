import type { Metadata } from "next";
import { ReactNode } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";

export const metadata: Metadata = {
  title: "Coding Challenge #1",
  description: "Sample Page Output for Coding Challenge #1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
