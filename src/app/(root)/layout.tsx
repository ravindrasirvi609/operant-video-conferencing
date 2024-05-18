import Sidebar from "@/components/Sidebar";
import React from "react";

const Rootlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      {" "}
      <Sidebar />
      {children}Footer
    </main>
  );
};

export default Rootlayout;
