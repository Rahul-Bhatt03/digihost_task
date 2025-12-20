import logo from "../assets/footer.jpg";

export const Footer = () => {
  return (
    <footer className="w-full relative">
      <div className="relative w-full h-[520px] sm:h-[480px] md:h-[400px] lg:h-[450px]">
        <img
          src={logo}
          alt="Footer Background"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 shadow-inner"></div>

        <div className="
          absolute inset-0
          flex flex-col md:flex-row
          justify-center md:justify-between
          items-center md:items-center
          px-6 md:px-20
          text-white
          h-full
          gap-12 md:gap-0
        ">

          <div
            className="
              md:w-1/3
              text-center md:text-left
              md:translate-x-20 md:-translate-y-16
            "
          >
            <h1 className="text-[36px] sm:text-[44px] md:text-[78px] font-serif mb-1 md:mb-2">
              Globus Spirits
            </h1>
            <p className="text-[16px] sm:text-[18px] md:text-[28px]">
              Live with Spirit
            </p>
          </div>

          <div
            className="
              w-full md:w-2/3
              grid grid-cols-1 sm:grid-cols-2 md:flex
              gap-10 md:gap-16
              text-center sm:text-left
            "
          >

            <div className="md:translate-x-45">
              <h2 className="text-[16px] md:text-[20px] font-serif mb-3">
                Quick Links
              </h2>
              <ul className="space-y-2 text-[14px] md:text-[16px] md:translate-y-5">
                <li className="hover:text-amber-400 cursor-pointer">About</li>
                <li className="hover:text-amber-400 cursor-pointer">Products</li>
                <li className="hover:text-amber-400 cursor-pointer">Operations</li>
                <li className="hover:text-amber-400 cursor-pointer">Investors</li>
                <li className="hover:text-amber-400 cursor-pointer">Social Responsibility</li>
              </ul>
            </div>

            <div className="md:translate-x-65">
              <h2 className="text-[16px] md:text-[20px] font-serif mb-3">
                Privacy & Policy
              </h2>
              <ul className="space-y-2 text-[14px] md:text-[16px] md:translate-y-5">
                <li className="hover:text-amber-400 cursor-pointer">Disclaimer</li>
                <li className="hover:text-amber-400 cursor-pointer">Careers</li>
              </ul>
            </div>

            <div className="md:translate-x-85">
              <h2 className="text-[16px] md:text-[20px] font-serif mb-3">
                Socials
              </h2>
              <ul className="space-y-2 text-[14px] md:text-[16px] md:translate-y-5">
                <li className="hover:text-amber-400 cursor-pointer">LinkedIn</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div className="bg-black h-16 md:h-20 text-white flex items-center justify-center px-4">
        <span className="text-xs sm:text-sm md:text-base text-center leading-relaxed">
          © Copyright 2024, All rights reserved with Globus Spirits Ltd.
        </span>
      </div>
    </footer>
  );
};
