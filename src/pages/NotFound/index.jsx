import { Link } from 'react-router-dom';
export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-bold text-[#FFB020] mb-4">404</h1>
      <p className="text-[#8B98A5] mb-6">Page not found.</p>
      <Link to="/" className="text-[#00F0C8] hover:underline">← Back home</Link>
    </div>
  );
}
