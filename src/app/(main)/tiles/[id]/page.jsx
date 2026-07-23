import Image from "next/image";
import Link from "next/link";
import React from "react";
import { notFound } from "next/navigation";

const getTile = async (id) => {
  const res = await fetch(`http://localhost:5000/tiles/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    notFound();
  }
  return res.json();
};

const TilesPage = async ({ params }) => {
  const { id } = await params;
  const tile = await getTile(id);
  console.log(tile);

  return (
    <div className="max-w-6xl mx-auto px-6 py-14 sm:py-20">
      <Link
        href="/all-tiles"
        className="text-sm text-slate-400 hover:text-slate-200 transition-colors"
      >
        ← Back to All Tiles
      </Link>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
        {/* Left: large high-res preview */}
        <div className="w-full aspect-square rounded-xl overflow-hidden bg-slate-800 border border-slate-800">
          <Image
            src={tile.image}
            width={200}
            height={200}
            alt={tile.title}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right: details */}
        {/* Right: details */}
        <div className="flex flex-col">
          {!tile.inStock && (
            <span className="w-fit mb-4 text-[11px] px-2 py-1 rounded bg-slate-800 text-slate-400">
              Out of Stock
            </span>
          )}

          <h1 className="text-3xl sm:text-4xl font-serif text-slate-100">
            {tile.title}
          </h1>

          {tile.creator && (
            <p className="text-sm text-slate-400 mt-2">
              By <span className="text-slate-300">{tile.creator}</span>
            </p>
          )}

          <p className="text-[#F59E0B] text-xl font-semibold mt-5">
            ${tile.price?.toFixed(2)}{" "}
            <span className="text-slate-500 text-sm font-normal">
              {tile.currency}
            </span>
          </p>

          {tile.style && (
            <p className="text-slate-300 text-sm leading-relaxed mt-5">
              <span className="text-slate-500">Style: </span>
              {tile.style}
            </p>
          )}

          <p className="text-slate-400 text-sm leading-relaxed mt-3">
            {tile.description}
          </p>

          {/* Tags */}
          {tile.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {tile.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full border border-slate-700 text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Spec table */}
          <dl className="grid grid-cols-2 gap-y-3 mt-8 pt-6 border-t border-slate-800 text-sm">
            <dt className="text-slate-500">Material</dt>
            <dd className="text-slate-300">{tile.material}</dd>

            <dt className="text-slate-500">Dimensions</dt>
            <dd className="text-slate-300">{tile.dimensions}</dd>

            <dt className="text-slate-500">Category</dt>
            <dd className="text-slate-300 capitalize">{tile.category}</dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default TilesPage;
