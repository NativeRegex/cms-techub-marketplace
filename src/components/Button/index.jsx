export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  ...props
}) {
  const base = 'inline-flex items-center justify-center gap-2 font-bold tracking-wider uppercase rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const variants = {
    primary: 'bg-[#00F0C8] text-[#050810] hover:bg-[#00A88C] shadow-[0_0_20px_rgba(0,240,200,0.4)] hover:shadow-[0_0_30px_rgba(0,240,200,0.7)]',
    secondary: 'bg-[#FFB020] text-[#050810] hover:bg-[#E09600] shadow-[0_0_20px_rgba(255,176,32,0.4)]',
    outline: 'bg-transparent border border-[#00F0C8] text-[#00F0C8] hover:bg-[#00F0C8] hover:text-[#050810]',
    ghost: 'bg-transparent text-[#E6EDF3] hover:bg-white/5',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
