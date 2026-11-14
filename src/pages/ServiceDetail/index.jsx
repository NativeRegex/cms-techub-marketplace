import { useParams, Link, useNavigate } from 'react-router-dom';
import { SERVICES } from '../../utils/constants';

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = SERVICES.find((s) => s.id === parseInt(id));

  if (!service) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-[#FFB020] mb-4">Service not found</h1>
        <Link to="/services" className="text-[#00F0C8] hover:underline">← Back to services</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/services" className="text-sm text-[#00F0C8] hover:underline mb-6 inline-block">
        ← Back to all services
      </Link>

      <div className="bg-[#0D1117]/80 border border-[#00F0C8]/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
        <div className="text-6xl mb-6">{service.icon}</div>
        <div className="text-xs uppercase tracking-widest text-[#FFB020] mb-3">
          {service.category}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#E6EDF3] mb-4">{service.title}</h1>
        <p className="text-lg text-[#8B98A5] mb-8 leading-relaxed">{service.description}</p>

        <div className="border-t border-[#00F0C8]/20 pt-8">
          <h2 className="text-xl font-bold text-[#00F0C8] mb-4">What's included</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
            {service.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-[#8B98A5]">
                <span className="text-[#00F0C8] mt-1">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-[#00F0C8]/20 pt-8 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <div className="text-xs text-[#8B98A5] uppercase tracking-wider mb-1">Starting at</div>
            <div className="text-3xl font-bold text-[#FFB020]">{service.price}</div>
          </div>
          <button
            onClick={() => navigate('/book', { state: { serviceId: service.id } })}
            className="px-8 py-4 bg-[#00F0C8] text-[#050810] font-bold uppercase tracking-wider rounded-lg hover:bg-[#00A88C] transition shadow-[0_0_20px_rgba(0,240,200,0.4)]"
          >
            Book this service →
          </button>
        </div>
      </div>
    </div>
  );
}
