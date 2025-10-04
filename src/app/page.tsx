import Footer from "@/components/Footer";
import MenuGallery from "@/components/MenuGallery";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="relative w-full min-h-screen  flex flex-col space-y-8  pb-20 sm:pb-0">
      <div className="relative w-full aspect-[16/9] ">
        <Image
          src="/logo.png"
          alt="logo"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="w-full bg-yellow-500 text-center py-12">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide text-black ">
          Our Menu
        </h1>
      </div>

      <div className="text-center mt-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white-800">
          Welcome to <span className="text-red-600">Boma Flame</span>
        </h2>
      </div>
      <MenuGallery />

      <div className="flex flex-col items-center space-y-6 p-6 bg-white rounded-2xl shadow-lg text-center max-w-md mx-auto">
        <h1 className="text-3xl font-light text-gray-700">
          Free Delivery Within{" "}
          <span className="font-semibold">Kiambu Town</span>
        </h1>

        <h2 className="text-3xl font-extrabold text-red-600 tracking-wide">
          0712 591 122
        </h2>

        <div className="w-full border-t border-gray-200 pt-4 space-y-2">
          <p className="text-lg font-medium text-gray-800">Delivery Fee</p>
          <ul className="space-y-1 text-gray-600">
            <li>
              <span className="font-semibold">Kirigiti</span> – 50 KSH
            </li>
            <li>
              <span className="font-semibold">Roe</span> – 50 KSH
            </li>
            <li>
              <span className="font-semibold">Thindigua</span> – 120 KSH
            </li>
            <li>
              <span className="font-semibold">Ndumberi</span> – 100 KSH
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;

{
  /* <div className="relative aspect-[4/4]">
        <Image src="/1.png" alt="1" fill />
      </div>
      <div className="relative aspect-[4/4]">
        <Image src="/2.png" alt="2" fill />
      </div>
      <div className="relative aspect-[4/4]">
        <Image src="/3.png" alt="3" fill />
      </div>
      <div className="relative aspect-[4/4]">
        <Image src="/4.png" alt="4" fill />
      </div>
      <div className="relative aspect-[4/4]">
        <Image src="/5.png" alt="5" fill />
      </div>
      <div className="relative aspect-[4/4]">
        <Image src="/7.png" alt="7" fill />
      </div>
      <div className="relative aspect-[4/4]">
        <Image src="/8.png" alt="8" fill />
      </div>
      <div className="relative aspect-[4/4]">
        <Image src="/9.png" alt="9" fill />
      </div>
      <div className="relative aspect-[4/4]">
        <Image src="/10.png" alt="10" fill />
      </div> */
}

{
  /* <div className="flex flex-col lg:flex-row items-center justify-center gap-8 px-8">
          <div className="w-40 h-40 flex items-center justify-center rounded-2xl bg-white shadow-md p-4 hover:scale-105 transition-transform">
            <Image
              src="/uber.png"
              alt="Uber Eats"
              width={160}
              height={160}
              className="object-contain"
            />
          </div>
          <div className="w-40 h-40 flex items-center justify-center rounded-2xl bg-white shadow-md p-4 hover:scale-105 transition-transform">
            <Image
              src="/glovo.png"
              alt="Glovo"
              width={160}
              height={160}
              className="object-contain"
            />
          </div>
          <div className="w-40 h-40 flex items-center justify-center rounded-2xl bg-white shadow-md p-4 hover:scale-105 transition-transform">
            <Image
              src="/bolt food.png"
              alt="Bolt Food"
              width={160}
              height={160}
              className="object-contain"
            />
          </div>
        </div> */
}
