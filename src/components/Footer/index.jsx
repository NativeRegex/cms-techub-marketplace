import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-[#00F0C8]/20 bg-[#050810]/80 backdrop-blur-sm mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-[#00F0C8] mb-3 tracking-wider">
            CMS<span className="text-[#FFB020]">·</span>TECHUB
          </h3>
          <p className="text-sm text-[#8B98A5] leading-relaxed">
            Your trusted partner for IT services, hardware, software, and cybersecurity solutions.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold text-[#00F0C8] mb-3 uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="text-[#8B98A5] hover:text-[#00F0C8] transition">Services</Link></li>
            <li><Link to="/partners" className="text-[#8B98A5] hover:text-[#00F0C8] transition">Partners</Link></li>
            <li><Link to="/products" className="text-[#8B98A5] hover:text-[#00F0C8] transition">Products</Link></li>
            <li><Link to="/contact" className="text-[#8B98A5] hover:text-[#00F0C8] transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-[#00F0C8] mb-3 uppercase tracking-wider">
            Get in Touch
          </h4>
          <ul className="space-y-2 text-sm text-[#8B98A5]">
            <li>📧 hello@cmstechub.com</li>
            <li>📱 +254 7XX XXX XXX</li>
            <li>📍 Nairobi, Kenya</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#00F0C8]/10 py-4 text-center text-xs text-[#8B98A5]">
        © {new Date().getFullYear()} CMS Techub. All rights reserved.
      </div>
    </footer>
  );
}
