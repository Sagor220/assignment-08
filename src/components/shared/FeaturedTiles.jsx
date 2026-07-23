import React from "react";
import Image from "next/image";
import Link from "next/link";

const FeaturedTiles = ({ d }) => {
  const { title, image, description } = d;
  console.log(image);
  return (
    <div className="card bg-base-100 shadow-sm  border-amber-50 border">
      <figure>
        <Image src={image} width={200} height={200} alt="tiles-image"></Image>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <Link className="btn btn-primary" href={"/"}>
            Browse Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedTiles;
