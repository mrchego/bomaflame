import Footer from "@/components/Footer";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="relative w-full min-h-screen  flex flex-col space-y-8 ">
      {/* Background */}
      {/* <Image 
        src="/bg.png" 
        alt="background" 
        fill 
        className="object-cover -z-10" 
        priority
      /> */}
      <div className="relative w-full aspect-[16/9] ">
        <Image
          src="/logo.png"
          alt="logo"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="w-full bg-yellow-500 items-center  text-center py-8">
        <h1 className="text-7xl font-light text-black">Our Menu</h1>
      </div>
      <div className="text-center">
        <h1 className="text-3xl font-bold">Welcome to Boma Flame</h1>
      </div>
      <div className="relative aspect-[4/4]">
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
      </div>
      <div className="flex flex-col space-y-4 text-center">
        <h1 className="text-4xl font-light">Free Delivery Within CBD</h1>
        <h1 className="text-6xl font-bold text-red-500">0712591122</h1>
        <p>OR</p>
        <p>ORDER VIA</p>
        <div className="flex flex-col lg:flex-row items-center justify-between px-8">
          <Image src="/ubers.png" alt="uber" width={200} height={200}/>
          <Image src="/glovo.png" alt="uber" width={200} height={200}/>
          <Image src="/bolt food.png" alt="uber" width={200} height={200}/>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
