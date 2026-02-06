export default function MapFrame({ src }) {
  return (
    <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-white/10 relative">
      <iframe
        className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
        src={src}
        title="Location Map"
        loading="lazy"
      />
    </div>
  );
}
