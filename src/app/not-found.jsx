import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-[80vh] flex justify-center gap-y-4 text-center flex-col">
      <h2 className="text-6xl text-blue-600 font-bold">
        This page is not found.
      </h2>
      <Link href={"/"}>
        <button className="btn btn-primary bg-blue-600 text-white font-bold">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
