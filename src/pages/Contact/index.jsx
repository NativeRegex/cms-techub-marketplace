import { useState } from 'react';
import { SITE } from '../../utils/constants';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact submitted:', form);
    setSubmitted(true);
  };

  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#E6EDF3] mb-4">Contact Us</h1>
        <p className="text-[#8B98A5] max-w-2xl">
          Have a question or need a quote? Reach out — we respond within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-[#0D1117]/80 border border-[#00F0C8]/20 rounded-xl p-6 backdrop-blur-sm">
            <h2 className="text-xl font-bold text-[#00F0C8] mb-4">Direct Contact</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-2xl">📧</span>
                <div>
                  <div className="text-xs uppercase text-[#8B98A5] mb-1">Email</div>
                  <a href={'mailto:' + SITE.email} className="text-[#E6EDF3] hover:text-[#00F0C8]">
                    {SITE.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">📱</span>
                <div>
                  <div className="text-xs uppercase text-[#8B98A5] mb-1">Phone</div>
                  <a href={'tel:' + SITE.phoneFull} className="text-[#E6EDF3] hover:text-[#00F0C8]">
                    {SITE.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <div className="text-xs uppercase text-[#8B98A5] mb-1">Location</div>
                  <div className="text-[#E6EDF3]">{SITE.location}</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-[#0D1117]/80 border border-[#FFB020]/20 rounded-xl p-6 backdrop-blur-sm">
            <h2 className="text-xl font-bold text-[#FFB020] mb-4">Follow Us</h2>
            <div className="space-y-3">
              <a href={SITE.linkedin} target="_blank" rel="noopener" className="flex items-center gap-3 text-[#8B98A5] hover:text-[#00F0C8] transition">
                <span className="text-xl">💼</span> LinkedIn — calistus-sirucha
              </a>
              <a href={SITE.github} target="_blank" rel="noopener" className="flex items-center gap-3 text-[#8B98A5] hover:text-[#00F0C8] transition">
                <span className="text-xl">🐙</span> GitHub — NativeRegex
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[#0D1117]/80 border border-[#00F0C8]/20 rounded-2xl p-8 backdrop-blur-sm">
          {submitted ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">✅</div>
              <h2 className="text-2xl font-bold text-[#00F0C8] mb-2">Message sent!</h2>
              <p className="text-[#8B98A5] mb-6">We will respond within 24 hours.</p>
              <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }); }} className="text-[#00F0C8] hover:underline">
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm text-[#8B98A5] mb-2 block">Name</label>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-[#8B98A5] mb-2 block">Email</label>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-sm text-[#8B98A5] mb-2 block">Message</label>
                <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={5} placeholder="How can we help?" />
              </div>
              <button type="submit" className="w-full py-3 bg-[#00F0C8] text-[#050810] font-bold uppercase tracking-wider rounded-lg hover:bg-[#00A88C] transition">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
