export default function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`glass-card border border-white/10 bg-white/5 backdrop-blur-md shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}
