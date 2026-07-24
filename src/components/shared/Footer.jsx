import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-neutral-content p-10">
      <aside>
        <Image src={logo} alt="website logo" height={200} width={200}></Image>

        <p>
          Tile gallery Ltd.
          <br />
          Providing reliable tile provider since 1992
        </p>
      </aside>
      <nav>
        <h6 className="footer-title"> Social Media</h6>
        <div className="grid grid-flow-col gap-4 items-center">
          <Link href={"https://x.com/"}>
            <FaTwitter className="h-6 w-6" />
          </Link>
          <Link href={"https://facebook.com"}>
            <FaFacebook className="h-6 w-6" />
          </Link>
          <Link href={"https://linkedin.com"}>
            <FaLinkedin className="h-6 w-6" />
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
