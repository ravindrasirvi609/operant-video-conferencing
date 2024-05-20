import StreamVideoProvider from "@/providers/streamClientProvider";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Operant Video Conferencing App",
  description: "Open-source video conferencing app with Stream and Clerk.",
  icons: {
    icon: "/icons/logo.svg",
  },
};
const Rootlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default Rootlayout;
