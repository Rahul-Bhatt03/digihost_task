import logo1 from "../assets/achieve1.jpg";
import logo2 from "../assets/achieve2.jpg";
import logo3 from "../assets/achieve3.jpg";
import logo4 from "../assets/achieve4.jpg";
import LearnMoreButton from "./LearnMoreButton";

export const Achievement = () => {
    const stats = [
        {
            number: "145+",
            description: "Million Litres Of Alcohol Production With Zero Discharge",
            image: logo1,
        },
        {
            number: "15+",
            description: "Million Litres End To End Production Of Bottled Beverages",
            image: logo2,
        },
        {
            number: "86%",
            description: "Utilization Of Operation Capacity",
            image: logo3,
        },
        {
            number: "340+",
            description: "Days Of Continuous Production",
            image: logo4,
        },
    ];

    return (
        <section className="w-full bg-[#FFF7F1] py-32 sm:mb-30 h-480 lg:h-370">
            <div className="max-w-7xl mx-auto px-6 lg:-px-40 space-y-28">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center gap-16 lg:gap-28 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                            }`}
                    >

                        <div
                            className={`
    w-full lg:w-[65%]
    flex
    ${index % 2 === 0 ? "justify-start" : "justify-end"}
  `}
                        >
                            <img
                                src={stat.image}
                                alt={stat.description}
                                className="w-full max-w-[520px] h-[260px] sm:h-[320px] lg:h-[360px] object-cover"
                            />
                        </div>


                        {/* CONTENT */}
                        <div className="w-full lg:w-[55%] lg:ml-200 flex flex-col justify-center ">
                            <h2
                                className="
                  font-['Source_Serif_4']
                  font-normal
                  text-[120px] sm:text-[180px] lg:text-[300px]
                  leading-[80%]
                  tracking-normal
                  text-gray-900
                "
                            >
                                {stat.number}
                            </h2>

                            <p
                                className="
                  mt-6
                  max-w-[411px]
                  font-['Albert_Sans']
                  font-normal
                  text-[18px] sm:text-[20px] lg:text-[24px]
                  leading-[120%]
                  tracking-normal
                  capitalize
                  text-gray-700
                "
                            >
                                {stat.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full flex justify-start mt-12 lg:mt-16 pr-6 lg:mr-200 lg:pr-20 translate-y-5">
                <LearnMoreButton textBlack>Learn More</LearnMoreButton>
            </div>


        </section>
    );
};
