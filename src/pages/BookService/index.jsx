import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SERVICES, SITE } from '../../utils/constants';

export default function BookService() {
  const location = useLocation();
  const preselectedId = location.state?.serviceId || '';

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    serviceId: preselectedId,
    date: '',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to backend API in next session
    console.log('Booking submitted:', form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20">
        <div className="text-6xl mb-6">✅</div>
        <h1 className="text-3xl font-bold text-[#00F0C8] mb-4">Booking Received!</h1>
        <p className="text-[#8B98A5] mb-8">
          Thank you, {form.name}. We'll contact you at {form.email} within 24 hours to confirm your booking.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', serviceId: '', date: '', description: '' }); }}
          className="text-[#00F0C8] hover:underline"
        >
          Submit another booking →
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#E6EDF3] mb-4">Book a Service</h1>
        <p className="text-[#8B98A5]">
          Fill in the form below and we'll contact you within 24 hours to confirm.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-[#0D1117]/80 border border-[#00F0C8]/20 rounded-2xl p-8 backdrop-blur-sm space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-[#8B98A5] mb-2 block">Full Name *</label>
            <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
          </div>
          <div>
            <label className="text-sm text-[#8B98A5] mb-2 block">Email *</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" />
          </div>
          <div>
            <label className="text-sm text-[#8B98A5] mb-2 block">Phone *</label>
            <input name="phone" value={form.phone} onChange={handleChange} required placeholder="07XX XXX XXX" />
          </div>
          <div>
            <label className="text-sm text-[#8B98A5] mb-2 block">Preferred Date</label>
            <input type="date" name="date" value={form.date} onChange={handleChange} />
          </div>
        </div>

        <div>
          <label className="text-sm text-[#8B98A5] mb-2 block">Service *</label>
          <select name="serviceId" value={form.serviceId} onChange={handleChange} required>
            <option value="">Select a service</option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.id}>{s.title} — {s.price}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm text-[#8B98A5] mb-2 block">Describe your project *</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Tell us what you need..."
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-[#00F0C8] text-[#050810] font-bold uppercase tracking-wider rounded-lg hover:bg-[#00A88C] transition shadow-[0_0_20px_rgba(0,240,200,0.4)]"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
}
