"use client";
import { FaWhatsappSquare,FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGooglemaps } from "react-icons/si";
import Link from "next/link";

export default function SocialBar() {
  const links = [
    // { href: "https://twitter.com", icon: <FaWhatsappSquare />, color: "bg-green-500" },
    { href: "https://www.instagram.com/boma_flame/", icon: <FaInstagram />, color: "bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600" },
    { href: "https://www.tiktok.com/@boma_flame", icon: <FaTiktok />, color: "bg-black" },
    { href: "https://www.google.com/maps/place/Kiambu+Mall", icon: <SiGooglemaps />, color: "bg-green-600" },
  ];

  return (
    <>
      {/* Large screens: vertical left bar */}
      <div className="hidden md:flex fixed top-1/3 left-0 flex-col space-y-2 z-50">
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

      {/* Small screens: horizontal bottom bar */}
      <div className="flex md:hidden fixed bottom-0 left-0 w-full justify-center space-x-3 bg-black/70 py-2 z-50">
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center w-10 h-10 text-white text-lg rounded-full shadow-md hover:opacity-80 transition-all ${link.color}`}
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </>
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
