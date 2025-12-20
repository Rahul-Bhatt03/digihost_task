interface ButtonProp {
  children: string;
  textBlack?: boolean; 
  className?: string;  
}

const LearnMoreButton = ({ children, textBlack = false, className = "" }: ButtonProp) => {
  return (
    <button
      className={`
        px-10 py-6 w-30 h-10
        flex items-center justify-center
        rounded-lg
        border ${textBlack ? "border-black" : "border-white"}
        ${textBlack ? "text-black hover:text-white hover:bg-black" : "text-white hover:text-black hover:bg-white"}
        font-medium text-base
        transition-colors duration-200
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default LearnMoreButton;
