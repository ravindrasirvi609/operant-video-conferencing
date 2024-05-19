import Sidebar from "@/components/Sidebar";
import StreamVideoProvider from "@/providers/streamClientProvider";
import React from "react";

const Rootlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default Rootlayout;
