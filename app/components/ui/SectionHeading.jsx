export default function SectionHeading({ children, className = "" }) {
  return (
    <h2 className={`text-3xl md:text-4xl font-serif text-white ${className}`}>
      {children}
    </h2>
  );
}
