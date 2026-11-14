import { useEffect, useRef } from 'react';

export default function TechBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W = 0, H = 0;
    let animationId;

    function resize() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const NODES = 55;
    const nodes = Array.from({ length: NODES }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: 1 + Math.random() * 1.8,
    }));

    const CODE = [
      'GET /api/services', 'POST /api/bookings',
      'SELECT * FROM services', 'encrypt(aes-256)',
      'auth: Bearer …', 'status: 200 OK',
      'npm run build', 'git push origin main',
      'ALTER TABLE users', 'if (token) {}',
      '<ServiceCard />', 'useEffect(() => {})',
    ];
    const fragments = Array.from({ length: 18 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      text: CODE[Math.floor(Math.random() * CODE.length)],
      speed: 0.3 + Math.random() * 0.6,
      alpha: 0.08 + Math.random() * 0.12,
      size: 11 + Math.random() * 3,
    }));

    const pulses = Array.from({ length: 5 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      phase: Math.random() * Math.PI * 2,
      speed: 0.002 + Math.random() * 0.004,
    }));

    function frame() {
      ctx.clearRect(0, 0, W, H);

      for (let x = 0; x < W; x += 40) {
        for (let y = 0; y < H; y += 40) {
          ctx.fillStyle = 'rgba(0, 240, 200, 0.05)';
          ctx.fillRect(x, y, 1.5, 1.5);
        }
      }

      for (const f of fragments) {
        f.y -= f.speed;
        if (f.y < -20) {
          f.y = H + 20;
          f.x = Math.random() * W;
          f.text = CODE[Math.floor(Math.random() * CODE.length)];
        }
        ctx.fillStyle = `rgba(0, 240, 200, ${f.alpha})`;
        ctx.font = `${f.size}px 'Courier New', monospace`;
        ctx.fillText(f.text, f.x, f.y);
      }

      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
        ctx.fillStyle = 'rgba(0, 240, 200, 0.7)';
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 140 * 140) {
            const alpha = (1 - Math.sqrt(d2) / 140) * 0.35;
            ctx.strokeStyle = `rgba(0, 240, 200, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const p of pulses) {
        p.phase += p.speed;
        const r = 80 + Math.sin(p.phase) * 40;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
        grad.addColorStop(0, 'rgba(255, 176, 32, 0.06)');
        grad.addColorStop(1, 'rgba(255, 176, 32, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(frame);
    }
    frame();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas id="tech-bg" ref={canvasRef} />;
}
