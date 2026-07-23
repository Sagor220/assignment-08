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
    <div className="grid grid-cols-4 gap-3">
      {tilesData.map((d) => (
        <FeaturedTiles key={d.id} d={d}></FeaturedTiles>
      ))}
    </div>
  );
};

export default AllTilesPage;
