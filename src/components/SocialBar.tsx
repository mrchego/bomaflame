"use client";
import {  FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGooglemaps } from "react-icons/si";
import Link from "next/link";

export default function SocialBar() {
  const links = [
    { href: "https://twitter.com", icon: <FaSquareXTwitter />, color: "bg-blue-500" },
    { href: "https://instagram.com", icon: <FaInstagram />, color: "bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600" },
    { href: "https://tiktok.com", icon: <FaTiktok />, color: "bg-black" },
    { href: "https://facebook.com", icon: <FaFacebookF />, color: "bg-blue-700" },
    { href: "https://maps.google.com", icon: <SiGooglemaps />, color: "bg-green-600" },
  ];

  return (
    <div className="fixed top-1/3 left-0 flex flex-col space-y-2 z-50">
      {links.map((link, i) => (
        <Link
          key={i}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center w-12 h-12 text-white text-xl rounded-r-lg shadow-lg hover:opacity-80 transition-all ${link.color}`}
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
}

// "use client";
// import { FaTwitter, FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa";
// import { SiGooglemaps } from "react-icons/si";
// import Link from "next/link";

// export default function SocialBar() {
//   const links = [
//     { href: "https://twitter.com", icon: <FaTwitter />, color: "bg-blue-500" },
//     { href: "https://instagram.com", icon: <FaInstagram />, color: "bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600" },
//     { href: "https://tiktok.com", icon: <FaTiktok />, color: "bg-black" },
//     { href: "https://facebook.com", icon: <FaFacebookF />, color: "bg-blue-700" },
//     { href: "https://maps.google.com", icon: <SiGooglemaps />, color: "bg-green-600" },
//   ];

//   return (
//     <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 z-50 ">
//       {links.map((link, i) => (
//         <Link
//           key={i}
//           href={link.href}
//           target="_blank"
//           rel="noopener noreferrer"
//           className={`flex items-center justify-center w-12 h-12 text-white text-xl rounded-full shadow-lg hover:opacity-80 transition-all ${link.color}`}
//         >
//           {link.icon}
//         </Link>
//       ))}
//     </div>
//   );
// }
