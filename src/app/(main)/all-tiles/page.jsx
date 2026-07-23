import FeaturedTiles from "@/components/shared/FeaturedTiles";
import React from "react";
const fetchTiles = async () => {
  const res = await fetch("http://localhost:5000/tiles");
  const data = await res.json();
  return data;
};
const AllTilesPage = async () => {
  const tilesData = await fetchTiles();
  return (
    <div className="container mx-auto">
      {/* search bar */}
      <label className="input my-3">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" required placeholder="Search" />
      </label>
      <div className="grid grid-cols-4 gap-3 mt-4">
        {tilesData.map((d) => (
          <FeaturedTiles key={d.id} d={d}></FeaturedTiles>
        ))}
      </div>
    </div>
  );
};

export default AllTilesPage;
