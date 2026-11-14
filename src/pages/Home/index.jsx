import { Link } from 'react-router-dom';
import { SERVICES, PRODUCTS, SITE } from '../../utils/constants';
import ServiceCard from '../../components/ServiceCard';

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="text-center py-16 md:py-24">
        <div className="inline-block px-4 py-2 border border-[#00F0C8]/40 rounded-full text-xs tracking-widest text-[#00F0C8] uppercase mb-6">
          IT Services · Products · Partners
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-[#E6EDF3] mb-6 leading-tight">
          Building <span className="text-[#00F0C8]">Digital Solutions</span>
          <br />
          for Kenyan Businesses
        </h1>
        <p className="text-lg text-[#8B98A5] max-w-2xl mx-auto mb-8 leading-relaxed">
          {SITE.description}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            to="/services"
            className="px-6 py-3 bg-[#00F0C8] text-[#050810] font-bold uppercase tracking-wider rounded-lg hover:bg-[#00A88C] transition shadow-[0_0_20px_rgba(0,240,200,0.4)]"
          >
            Explore Services
          </Link>
          <Link
            to="/book"
            className="px-6 py-3 border border-[#00F0C8] text-[#00F0C8] font-bold uppercase tracking-wider rounded-lg hover:bg-[#00F0C8] hover:text-[#050810] transition"
          >
            Book a Service
          </Link>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-16">
        <div className="flex justify-between items-end mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#E6EDF3] mb-2">Our Services</h2>
            <p className="text-[#8B98A5]">Professional IT services tailored to your needs.</p>
          </div>
          <Link to="/services" className="text-[#00F0C8] text-sm hover:underline">
            View all services →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.slice(0, 6).map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="py-16">
        <div className="flex justify-between items-end mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#E6EDF3] mb-2">Digital Products</h2>
            <p className="text-[#8B98A5]">Guides, templates, and service packages.</p>
          </div>
          <Link to="/products" className="text-[#00F0C8] text-sm hover:underline">
            Browse products →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[PRODUCTS[0], PRODUCTS[6], PRODUCTS[1]].map((p) => (
            <div
              key={p.id}
              className="bg-[#0D1117]/80 border border-[#FFB020]/20 rounded-xl p-6 backdrop-blur-sm hover:border-[#FFB020]/60 transition"
            >
              <div className="text-4xl mb-4">{p.icon}</div>
              <div className="text-xs uppercase tracking-wider text-[#FFB020] mb-2">
                {p.category}
              </div>
              <h3 className="text-xl font-bold text-[#E6EDF3] mb-2">{p.title}</h3>
              <p className="text-sm text-[#8B98A5] line-clamp-2 mb-4">{p.description}</p>
              <div className="text-[#FFB020] font-semibold">{p.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="bg-gradient-to-r from-[#00F0C8]/10 to-[#FFB020]/10 border border-[#00F0C8]/30 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#E6EDF3] mb-4">
            Ready to get started?
          </h2>
          <p className="text-[#8B98A5] mb-8 max-w-xl mx-auto">
            Contact us today for a free consultation. We'll help you find the right solution for your business.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-[#FFB020] text-[#050810] font-bold uppercase tracking-wider rounded-lg hover:bg-[#E09600] transition shadow-[0_0_20px_rgba(255,176,32,0.4)]"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
