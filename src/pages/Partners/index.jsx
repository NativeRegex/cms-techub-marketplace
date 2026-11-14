import { PARTNERS } from '../../utils/constants';

export default function Partners() {
  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#E6EDF3] mb-4">Our Partners</h1>
        <p className="text-[#8B98A5] max-w-2xl">
          CMS Techub collaborates with trusted IT professionals and companies to deliver
          comprehensive solutions for our clients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PARTNERS.map((p) => (
          <div
            key={p.id}
            className="bg-[#0D1117]/80 border border-[#00F0C8]/20 rounded-xl p-8 backdrop-blur-sm text-center"
          >
            <div className="text-5xl mb-4">{p.icon}</div>
            <div className="text-xs uppercase tracking-wider text-[#FFB020] mb-2">
              {p.category}
            </div>
            <h3 className="text-xl font-bold text-[#E6EDF3] mb-3">{p.name}</h3>
            <p className="text-sm text-[#8B98A5]">{p.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 border border-[#00F0C8]/20 rounded-xl bg-[#0D1117]/60 text-center">
        <h3 className="text-xl font-bold text-[#00F0C8] mb-3">Want to become a partner?</h3>
        <p className="text-[#8B98A5] mb-4">Reach out and let's discuss working together.</p>
        <a
          href="mailto:masindecalistus411@gmail.com"
          className="text-[#FFB020] hover:underline font-semibold"
        >
          masindecalistus411@gmail.com
        </a>
      </div>
    </div>
  );
}
