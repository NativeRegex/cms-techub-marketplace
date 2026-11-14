import { PRODUCTS } from '../../utils/constants';

export default function Products() {
  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#E6EDF3] mb-4">Products</h1>
        <p className="text-[#8B98A5] max-w-2xl">
          Digital guides, software licenses, and service packages — delivered instantly or within 24 hours.
        </p>
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCTS.map((p) => (
          <div
            key={p.id}
            className="bg-[#0D1117]/80 border border-[#FFB020]/20 rounded-xl p-6 backdrop-blur-sm hover:border-[#FFB020]/60 hover:shadow-[0_0_30px_rgba(255,176,32,0.15)] transition flex flex-col"
          >
            <div className="text-4xl mb-4">{p.icon}</div>
            <div className="text-xs uppercase tracking-wider text-[#FFB020] mb-2">
              {p.category}
            </div>
            <h3 className="text-xl font-bold text-[#E6EDF3] mb-2">{p.title}</h3>
            <p className="text-sm text-[#8B98A5] mb-4 leading-relaxed flex-1">{p.description}</p>
            <div className="flex justify-between items-center pt-4 border-t border-[#FFB020]/10">
              <span className="text-[#FFB020] font-bold text-lg">{p.price}</span>
              <button className="text-xs uppercase tracking-wider text-[#00F0C8] hover:text-white transition">
                Order →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* HARDWARE COMING SOON */}
      <div className="mt-16">
        <div className="mb-6">
          <div className="text-xs uppercase tracking-widest text-[#00F0C8] mb-2">Coming Soon</div>
          <h2 className="text-3xl font-bold text-[#E6EDF3] mb-3">Hardware Store</h2>
          <p className="text-[#8B98A5] max-w-2xl">
            We're expanding into hardware sales. Soon you'll be able to order laptops, computers, printers,
            SSDs, HDDs, RAM, and other IT equipment directly from CMS Techub.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: '💻', label: 'Laptops & PCs' },
            { icon: '🖨️', label: 'Printers' },
            { icon: '💽', label: 'SSDs & HDDs' },
            { icon: '🧠', label: 'RAM & Memory' },
            { icon: '⌨️', label: 'Keyboards' },
            { icon: '🖱️', label: 'Mice & Accessories' },
            { icon: '📱', label: 'Tablets' },
            { icon: '🔌', label: 'Networking Gear' },
          ].map((h, i) => (
            <div
              key={i}
              className="bg-[#0D1117]/60 border border-[#00F0C8]/10 rounded-xl p-6 text-center opacity-60"
            >
              <div className="text-3xl mb-2">{h.icon}</div>
              <div className="text-sm text-[#8B98A5]">{h.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
