export default function Button({
  children,
  onClick,
  className = "",
  variant = "primary",
}) {
  const baseStyles =
    "px-8 py-3 text-sm font-bold tracking-widest uppercase transition-all duration-300 rounded-lg transform hover:-translate-y-1";

  const variants = {
    primary:
      "bg-white text-[#223614] hover:bg-cyan-400 hover:text-white shadow-xl",
    gradient:
      "bg-linear-to-r from-cyan-600 to-blue-600 text-white hover:shadow-cyan-500/20 shadow-lg",
    outline:
      "border border-white text-white hover:bg-white hover:text-[#223614]",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
