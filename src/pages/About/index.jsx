import { SITE } from '../../utils/constants';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#E6EDF3] mb-4">About CMS Techub</h1>
        <p className="text-[#8B98A5] text-lg">
          Building digital solutions for Kenyan businesses.
        </p>
      </div>

      <div className="bg-[#0D1117]/80 border border-[#00F0C8]/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm mb-8">
        <div className="text-xs uppercase tracking-widest text-[#FFB020] mb-3">Our Story</div>
        <h2 className="text-2xl font-bold text-[#00F0C8] mb-4">Who We Are</h2>
        <p className="text-[#8B98A5] leading-relaxed mb-4">
          CMS Techub was founded by <span className="text-[#E6EDF3] font-semibold">{SITE.owner}</span>,
          an IT professional passionate about delivering real, working technology solutions to
          businesses and individuals across Kenya.
        </p>
        <p className="text-[#8B98A5] leading-relaxed mb-4">
          We combine deep technical expertise in web development, networking, cybersecurity, and
          hardware with a strong service mindset. Our goal is simple: help our clients use
          technology effectively, securely, and affordably.
        </p>
        <p className="text-[#8B98A5] leading-relaxed">
          Every project, from a small network installation to a full-stack web application, is
          treated with the same care and professionalism.
        </p>
      </div>

      <div className="bg-[#0D1117]/80 border border-[#FFB020]/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm mb-8">
        <div className="text-xs uppercase tracking-widest text-[#FFB020] mb-3">Leadership</div>
        <h2 className="text-2xl font-bold text-[#FFB020] mb-4">{SITE.owner}</h2>
        <p className="text-[#8B98A5] mb-2"><strong className="text-[#E6EDF3]">Role:</strong> {SITE.role}</p>
        <p className="text-[#8B98A5] mb-2"><strong className="text-[#E6EDF3]">Focus:</strong> Full-stack development, networking, cybersecurity, IT training</p>
        <p className="text-[#8B98A5] mb-6"><strong className="text-[#E6EDF3]">Location:</strong> {SITE.location}</p>
        <div className="flex gap-4 flex-wrap">
          <a href={SITE.linkedin} target="_blank" rel="noopener" className="px-4 py-2 border border-[#00F0C8] text-[#00F0C8] rounded-lg text-sm hover:bg-[#00F0C8] hover:text-[#050810] transition">
            LinkedIn
          </a>
          <a href={SITE.github} target="_blank" rel="noopener" className="px-4 py-2 border border-[#00F0C8] text-[#00F0C8] rounded-lg text-sm hover:bg-[#00F0C8] hover:text-[#050810] transition">
            GitHub
          </a>
          <a href={'mailto:' + SITE.email} className="px-4 py-2 bg-[#FFB020] text-[#050810] rounded-lg text-sm font-bold hover:bg-[#E09600] transition">
            Email Us
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#0D1117]/80 border border-[#00F0C8]/20 rounded-xl p-6 backdrop-blur-sm text-center">
          <div className="text-4xl mb-3">🎯</div>
          <h3 className="text-lg font-bold text-[#00F0C8] mb-2">Our Mission</h3>
          <p className="text-sm text-[#8B98A5]">Make professional IT services accessible to every Kenyan business.</p>
        </div>
        <div className="bg-[#0D1117]/80 border border-[#00F0C8]/20 rounded-xl p-6 backdrop-blur-sm text-center">
          <div className="text-4xl mb-3">🔒</div>
          <h3 className="text-lg font-bold text-[#00F0C8] mb-2">Our Values</h3>
          <p className="text-sm text-[#8B98A5]">Security, honesty, quality work, and clear communication.</p>
        </div>
        <div className="bg-[#0D1117]/80 border border-[#00F0C8]/20 rounded-xl p-6 backdrop-blur-sm text-center">
          <div className="text-4xl mb-3">⚡</div>
          <h3 className="text-lg font-bold text-[#00F0C8] mb-2">Our Promise</h3>
          <p className="text-sm text-[#8B98A5]">Fast response, fair pricing, and solutions that actually work.</p>
        </div>
      </div>
    </div>
  );
}
