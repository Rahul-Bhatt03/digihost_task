export const ProductSlide = ({ data, handleNext, handlePrev, tableImg }) => {
  return (
    <div className="relative w-full h-[calc(100vh-150px)] flex items-end justify-center overflow-visible">
      
      {/* Static Table */}
      <div className="absolute bottom-0 w-full h-1/3 z-10">
        <img src={tableImg} className="w-full h-full object-cover" alt="Table" />
      </div>

      {/* Accent Elements */}
      {data.accentTop && (
        <img 
          src={data.accentTop} 
          className="absolute top-10 left-10 w-32 h-32 object-contain z-30 opacity-90 animate-fade-in" 
          alt="Accent Top" 
        />
      )}
      {data.accentBottom && (
        <img 
          src={data.accentBottom} 
          className="absolute bottom-40 right-10 w-28 h-28 object-contain z-30 opacity-90 animate-fade-in" 
          alt="Accent Bottom" 
        />
      )}

      {/* Main Content */}
      <div className="relative z-40 container mx-auto grid grid-cols-2 gap-10 px-8 lg:px-20">
        {/* Left Text */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className={`text-5xl font-serif font-bold ${data.textColor}`}>{data.title}</h2>
          <p className={`text-lg max-w-md ${data.textColor} opacity-90 font-light leading-relaxed`}>
            {data.description}
          </p>
          <button className="w-fit px-8 py-3 border-2 border-[#100E17] hover:bg-[#100E17] hover:text-white transition-all duration-300 text-[#100E17] font-medium">
            Learn More
          </button>

          {/* Navigation */}
          <div className="flex gap-4 pt-10">
            <button 
              onClick={handlePrev} 
              className="p-4 border-2 border-[#100E17] rounded-full hover:bg-[#100E17] hover:text-white transition-all duration-300 text-[#100E17]"
            >←</button>
            <button 
              onClick={handleNext} 
              className="p-4 border-2 border-[#100E17] rounded-full hover:bg-[#100E17] hover:text-white transition-all duration-300 text-[#100E17]"
            >→</button>
          </div>
        </div>

        {/* Right Bottle */}
        <div className="flex justify-center items-end relative z-20">
          <img 
            key={data.id} 
            src={data.bottleImg} 
            className="h-[500px] object-contain animate-slide-up" 
            alt={data.title} 
          />
        </div>
      </div>
    </div>
  );
};
