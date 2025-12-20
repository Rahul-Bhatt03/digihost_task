import { PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

export const ConnectWithUs = () => {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[70vh] bg-amber-50">
      <div className="relative pt-20 md:pt-32 pb-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">

          <h2
            className="font-instrument-serif
              text-3xl sm:text-4xl md:text-5xl
              font-serif text-gray-900
              mb-14 md:mb-20
              md:translate-x-30 md:translate-y-30
            "
          >
            Connect With Us
          </h2>

          <div
            className="
    grid grid-cols-1 lg:grid-cols-3
    gap-12 lg:gap-24
    pl-4 sm:pl-8
    lg:pl-0
  "  >


            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-8 md:translate-y-50 md:translate-x-30">

              <div className="flex gap-4 items-start">
                <PhoneIcon className="w-5 h-5 text-gray-700 mt-1" />
                <p className="text-base md:text-lg text-gray-900 font-medium font-albert-sans">
                  +91-11-66424600
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <MapPinIcon className="w-5 h-5 text-gray-700 mt-1" />
                <p
                  className="
                    text-sm md:text-base
                    text-gray-700
                    leading-relaxed
                    max-w-md font-albert-sans
                  "
                >
                  F-0, Ground Floor, The Mira Corporate Suites,
                  Plot No. 1 & 2, Ishwar Nagar,
                  Mathura Road, New Delhi 110065
                </p>
              </div>

            </div>

            {/* MIDDLE COLUMN */}
            <div className="flex flex-col gap-10 lg:justify-center md:translate-y-50 md:translate-x-30">

              <div className="flex flex-col gap-1.5">
                <p className="text-xs uppercase tracking-wide text-gray-500 font-instrument-serif">
                  Investor Email
                </p>
                <a
                  href="mailto:ir@globusgroup.in"
                  className="text-base text-gray-900 hover:text-amber-700 transition-colors font-albert-sans"
                >
                  ir@globusgroup.in
                </a>
              </div>

              <div className="flex flex-col gap-1.5">
                <p className="text-xs uppercase tracking-wide text-gray-500 font-instrument-serif">
                  General Inquiry
                </p>
                <a
                  href="mailto:connect@globusgroup.in"
                  className="text-base text-gray-900 hover:text-amber-700 transition-colors font-albert-sans"
                >
                  connect@globusgroup.in
                </a>
              </div>

            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-1.5 lg:justify-center md:translate-y-40 ">
              <p className="text-xs uppercase tracking-wide text-gray-500 font-instrument-serif">
                Supplier & Vendor
              </p>
              <a
                href="mailto:corporateoffice@globusgroup.in"
                className="text-base text-gray-900 hover:text-amber-700 transition-colors font-albert-sans"
              >
                corporateoffice@globusgroup.in
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
