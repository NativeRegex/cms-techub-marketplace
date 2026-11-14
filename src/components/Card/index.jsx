export default function Card({ children, className = '', hover = true, ...props }) {
  const base = 'bg-[#0D1117]/80 border border-[#00F0C8]/20 rounded-xl p-6 backdrop-blur-sm';
  const hoverClass = hover ? 'hover:border-[#00F0C8]/60 hover:shadow-[0_0_30px_rgba(0,240,200,0.15)] transition-all duration-300' : '';

  return (
    <div className={`${base} ${hoverClass} ${className}`} {...props}>
      {children}
    </div>
  );
}
