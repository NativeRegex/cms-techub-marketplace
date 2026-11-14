import { Link } from 'react-router-dom';

export default function ServiceCard({ service }) {
  return (
    <Link to={`/services/${service.id}`} className="group">
      <div className="h-full bg-[#0D1117]/80 border border-[#00F0C8]/20 rounded-xl p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#00F0C8]/60 hover:shadow-[0_0_30px_rgba(0,240,200,0.15)] hover:-translate-y-1">
        <div className="text-4xl mb-4">{service.icon}</div>
        <div className="text-xs uppercase tracking-wider text-[#FFB020] mb-2">
          {service.category}
        </div>
        <h3 className="text-xl font-bold text-[#E6EDF3] mb-2 group-hover:text-[#00F0C8] transition">
          {service.title}
        </h3>
        <p className="text-sm text-[#8B98A5] line-clamp-3 mb-4">
          {service.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-[#00F0C8] font-semibold text-sm">{service.price}</span>
          <span className="text-[#00F0C8] text-sm group-hover:translate-x-1 transition">
            Learn more →
          </span>
        </div>
      </div>
    </Link>
  );
}
