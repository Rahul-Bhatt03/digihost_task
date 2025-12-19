import logo from "../assets/footer.jpg";

export const Footer = () => {
  return (
  <footer className="w-full relative">
      <div className="relative w-full h-[450px] md:h-[400px] lg:h-[450px]">
        <img
          src={logo}
          alt="Footer Background"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 shadow-inner"></div>

        <div className="absolute inset-0 flex flex-col md:flex-row justify-between items-start md:items-center px-6 md:px-20 text-white h-full">

          {/* Logo & Subtitle */}
          <div className="mb-8 md:mb-0 md:w-1/3 translate-x-20 -translate-y-16">
            <h1 className="text-[78px] font-serif mb-2">Globus Spirits</h1>
            <p className="text-[28px]">Live with Spirit</p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 w-full md:w-2/3">
            
            <div className="translate-x-45">
              <h2 className="text-[20px] font-serif mb-2">Quick Links</h2>
              <ul className="space-y-1 text-[16px] translate-y-5">
                <li className="hover:text-amber-400 cursor-pointer translate-y-3">About</li>
                <li className="hover:text-amber-400 cursor-pointer translate-y-3">Products</li>
                <li className="hover:text-amber-400 cursor-pointer translate-y-3">Operations</li>
                <li className="hover:text-amber-400 cursor-pointer translate-y-3">Investors</li>
                <li className="hover:text-amber-400 cursor-pointer translate-y-3">Social Responsibility</li>
              </ul>
            </div>

            <div className="translate-x-65 ">
              <h2 className="text-[20px] font-serif mb-2 ">Privacy & Policy</h2>
              <ul className="space-y-1 text-[16px] translate-y-5">
                <li className="hover:text-amber-400 cursor-pointer">Disclaimer</li>
                <li className="hover:text-amber-400 cursor-pointer">Careers</li>
              </ul>
            </div>

            <div className="translate-x-85">
              <h2 className="text-[20px] font-serif mb-2">Socials</h2>
              <ul className="space-y-1 text-[16px] translate-y-5">
                <li className="hover:text-amber-400 cursor-pointer">LinkedIn</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black h-20 text-white flex items-center justify-center">
        <span className="text-sm md:text-base text-center">
          © Copyright 2024, All rights reserved with Globus Spirits Ltd.
        </span>
      </div>
    </footer>
  );
};
