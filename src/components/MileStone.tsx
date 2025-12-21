import firstmilestone from "../assets/milestonefirst.png";
import sec from "../assets/milestonesec.png";
import third from "../assets/milestonethird.png";
import forth from "../assets/milestoneforth.png";
import fifth from "../assets/milestonefifth.png";
import LearnMoreButton from "./LearnMoreButton";

export const MileStone = () => {
  const mileStoneData = [
    { id: 5, logo: fifth },
    { id: 3, logo: third },
    { id: 1, logo: firstmilestone },
    { id: 2, logo: sec },
    { id: 4, logo: forth },
  ];

  return (
    <section className="bg-[#FFF7F1] w-full h-145 py-16 px-4 sm:px-8 lg:px-20 flex flex-col items-center">

      <div className="flex flex-col items-center mb-12 w-full max-w-4xl">
        <div className="flex items-center gap-4 mb-4 w-full justify-center">
          <span className="w-12 h-[1px] bg-gray-400/70"></span>
          <span className="w-2 h-2 rounded-full bg-gray-900"></span>


          <h2
            className="
            font-instrument-serif font-normal
            text-3xl sm:text-4xl lg:text-5xl
            leading-[120%]
            text-center text-gray-900
            mb-8
          "
          >
            Milestones of Trust & Recognition
          </h2>
          <span className="w-2 h-2 rounded-full bg-gray-900"></span>
          <span className="w-12 h-[1px] bg-gray-400/70"></span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center mb-12 lg:translate-y-10">
        {mileStoneData.map((item) => (
          <div key={item.id} className="flex justify-center">
            <img src={item.logo} alt={`Milestone ${item.id}`} className="max-h-24 sm:max-h-32 lg:max-h-36 object-contain" />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center mb-12 lg:translate-y-20">
        {mileStoneData.map((item) => (
          <div key={item.id} className="flex justify-center">
            <img src={item.logo} alt={`Milestone ${item.id}`} className="max-h-24 sm:max-h-32 lg:max-h-36 object-contain" />
          </div>
        ))}
      </div>

      <div className="mt-6 lg:translate-y-35 ">
        <LearnMoreButton textBlack>Learn More</LearnMoreButton>
      </div>
    </section>
  );
};
