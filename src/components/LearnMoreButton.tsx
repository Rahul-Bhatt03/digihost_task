interface ButtonProp {
  children: string;
  textBlack?: boolean; 
  className?: string;
  variant?: "white" | "black";   // new
  size?: "sm" | "md" | "lg";    // new
}

const LearnMoreButton = ({
  children,
  textBlack = false,
  className = "",
  variant = "black",
  size = "md",
}: ButtonProp) => {
  const variantClass =
    variant === "white"
      ? "border-white text-white hover:text-black hover:bg-white"
      : "border-black text-black hover:text-white hover:bg-black";

  let sizeClass = "";
  if (size === "sm") sizeClass = "px-4 py-2 text-sm h-8 w-24";
  else if (size === "md") sizeClass = "px-10 py-6 text-base h-10 w-30";
  else if (size === "lg") sizeClass = "px-12 py-8 text-lg h-12 w-36";

  return (
    <button
      className={`
        flex items-center justify-center
        rounded-lg
        border
        ${variantClass}
        font-medium
        transition-colors duration-200
        ${sizeClass}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default LearnMoreButton;
