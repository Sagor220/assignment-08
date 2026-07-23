import React from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import FeaturedTiles from "./FeaturedTiles";

const marqueeText = [
  "🆕 New Arrival: Ceramic Blue Tile",
  "✨ Weekly Feature: Modern Geometric Patterns",
  "🏡 Premium Ceramic, Porcelain & Marble Tiles",
  "🚚 Free Shipping on Orders Over $500",
  "💎 Exclusive Summer Collection Now Available",
  "⭐ Trusted by 10,000+ Happy Customers",
  "🎉 Up to 30% OFF on Selected Tiles",
  "📞 Need Help? Contact Our Design Experts",
  "🤝 Join the Tile Lovers Community Today",
].join("  |  ");

const fetchTiles = async () => {
  const res = await fetch("http://localhost:5000/tiles");
  const data = await res.json();
  return data;
};
const Header = async () => {
  const tilesData = await fetchTiles();
  const featuredTiles = tilesData.slice(0, 4);
  return (
    <div className="my-4">
      <div className="container justify-center text-center items-center space-y-2">
        <h2>Discover Your Perfect Aesthetic</h2>

        <Link className="btn btn-primary" href={"/all-tiles"}>
          Browse Now
        </Link>
      </div>
      <div className="mt-4">
        <Marquee pauseOnHover className="my-3">
          {marqueeText}
        </Marquee>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {featuredTiles.map((d) => (
          <FeaturedTiles key={d.id} d={d}></FeaturedTiles>
        ))}
      </div>
    </div>
  );
};

export default Header;
