import React from "react";
import Image from "next/image";

const Loadder = () => {
  return (
    <div className="flex-center w-full h-screen">
      <Image
        src="/icons/loading-circle.svg"
        alt="Loading..."
        width={50}
        height={50}
      />
    </div>
  );
};

export default Loadder;
