import { SERVICES } from '../../utils/constants';
import ServiceCard from '../../components/ServiceCard';

export default function Services() {
  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#E6EDF3] mb-4">Our Services</h1>
        <p className="text-[#8B98A5] max-w-2xl">
          Professional IT services for individuals and businesses. Every service is delivered
          with expertise, honesty, and a focus on real results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((s) => (
          <ServiceCard key={s.id} service={s} />
        ))}
      </div>
    </div>
  );
}
