const LearnMoreButton = ({ children }) => {
  return (
    <div>
      <button
        className="
          w-[160px] h-[45px]
          flex items-center justify-center
          rounded-lg
          border border-white
          text-white text-base font-medium
          hover:bg-white hover:text-black
          transition-all duration-200
        "
      >
        {children}
      </button>
    </div>
  );
};

export default LearnMoreButton;
