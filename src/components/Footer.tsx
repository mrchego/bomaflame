const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-red-500 text-white p-2 text-center space-y-4">
      <h1 className="font-bold text-4xl">Boma Flame</h1>
      <p className="font-light text-lg">Location:</p>
      <h2 className="font-bold text-4xl">Kiambu Mall</h2>
      <p className="font-light text-lg">Nairobi, Kenya</p>
      <p className="font-light text-lg">Food Delivery No</p>
      <h1 className="font-bold text-4xl">0712591122</h1>

      {/* Copyright Section */}
      <div className="pt-4 border-t border-white/30">
        <p className="text-sm font-light">
          © {currentYear} Boma Flame. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
