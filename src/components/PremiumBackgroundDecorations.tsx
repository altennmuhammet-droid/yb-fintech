import React from 'react';

interface PremiumBackgroundDecorationsProps {
  variant?: 'about' | 'ecosystem';
}

export const PremiumBackgroundDecorations: React.FC<PremiumBackgroundDecorationsProps> = ({ variant = 'about' }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    >
      <style>{`
        @keyframes floatDriftTR {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(3deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes floatDriftBL {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(16px) rotate(-3deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes orbPulseTR {
          0%, 100% { opacity: 0.45; transform: scale(0.96); }
          50% { opacity: 0.85; transform: scale(1.06); }
        }
        @keyframes orbPulseBL {
          0%, 100% { opacity: 0.4; transform: scale(1.04); }
          50% { opacity: 0.8; transform: scale(0.95); }
        }
        @keyframes starGlow1 {
          0%, 100% { opacity: 0.2; transform: scale(0.85); }
          50% { opacity: 0.95; transform: scale(1.3); }
        }
        @keyframes starGlow2 {
          0%, 100% { opacity: 0.9; transform: scale(1.25); }
          50% { opacity: 0.2; transform: scale(0.8); }
        }
      `}</style>

      {/* ========================================================
          ZONE 1: SİTENİN SAĞ ÜSTÜ (Far Top-Right of Viewport)
          Dağınık, organik Apple tarzı parlayan nokta kümesi
          ======================================================== */}
      
      {/* Soft Ambient Cyan/Sapphire Aura */}
      <div
        style={{
          position: 'absolute',
          top: '-60px',
          right: '-80px',
          width: '560px',
          height: '560px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.14) 0%, rgba(99, 102, 241, 0.06) 45%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'orbPulseTR 12s ease-in-out infinite',
        }}
      />

      {/* Scattered Star Constellation */}
      <div
        style={{
          position: 'absolute',
          top: '90px',
          right: '1.5vw',
          width: '420px',
          height: '380px',
          animation: 'floatDriftTR 16s ease-in-out infinite',
        }}
      >
        <svg width="420" height="380" viewBox="0 0 420 380" fill="none">
          {/* Organic Scattered Floating Dots (No Circles/Rings) */}
          {[
            { cx: 340, cy: 40, r: 3.5, color: '#38BDF8', glow: true },
            { cx: 270, cy: 30, r: 2.8, color: '#2563EB', glow: false },
            { cx: 390, cy: 95, r: 4.5, color: '#F59E0B', glow: true },
            { cx: 310, cy: 110, r: 2.5, color: '#CBD5E1', glow: false },
            { cx: 360, cy: 155, r: 3.2, color: '#38BDF8', glow: true },
            { cx: 230, cy: 130, r: 3.8, color: '#818CF8', glow: false },
            { cx: 195, cy: 75, r: 2.2, color: '#94A3B8', glow: false },
            { cx: 155, cy: 120, r: 3, color: '#2563EB', glow: true },
            { cx: 280, cy: 195, r: 4.5, color: '#F59E0B', glow: true },
            { cx: 350, cy: 230, r: 3.2, color: '#38BDF8', glow: false },
            { cx: 215, cy: 210, r: 2.4, color: '#CBD5E1', glow: false },
            { cx: 140, cy: 250, r: 4, color: '#10B981', glow: true },
            { cx: 260, cy: 270, r: 3.5, color: '#2563EB', glow: true },
            { cx: 330, cy: 300, r: 2.2, color: '#94A3B8', glow: false },
            { cx: 220, cy: 310, r: 3, color: '#818CF8', glow: false },
            { cx: 125, cy: 65, r: 2, color: '#CBD5E1', glow: false },
            { cx: 90, cy: 170, r: 3.5, color: '#38BDF8', glow: true },
            { cx: 375, cy: 190, r: 2.2, color: '#CBD5E1', glow: false },
            { cx: 175, cy: 345, r: 3, color: '#F59E0B', glow: true },
            { cx: 255, cy: 350, r: 2.5, color: '#2563EB', glow: false },
          ].map((dot, idx) => (
            <circle
              key={`tr-dot-${idx}`}
              cx={dot.cx}
              cy={dot.cy}
              r={dot.r}
              fill={dot.color}
              style={{
                filter: dot.glow ? `drop-shadow(0 0 6px ${dot.color})` : undefined,
                animation: idx % 2 === 0 ? 'starGlow1 3.8s ease-in-out infinite' : 'starGlow2 4.4s ease-in-out infinite',
              }}
            />
          ))}
        </svg>
      </div>


      {/* ========================================================
          ZONE 2: SİTENİN SOL ALTI (Far Bottom-Left of Viewport)
          Dağınık, organik Apple tarzı parlayan nokta kümesi
          ======================================================== */}

      {/* Soft Ambient Amber/Ocean Aura */}
      <div
        style={{
          position: 'absolute',
          bottom: '-60px',
          left: '-80px',
          width: '540px',
          height: '540px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.11) 0%, rgba(37, 99, 235, 0.06) 45%, transparent 70%)',
          filter: 'blur(65px)',
          animation: 'orbPulseBL 13s ease-in-out infinite alternate',
        }}
      />

      {/* Scattered Star Constellation */}
      <div
        style={{
          position: 'absolute',
          bottom: '50px',
          left: '1.5vw',
          width: '420px',
          height: '380px',
          animation: 'floatDriftBL 18s ease-in-out infinite',
        }}
      >
        <svg width="420" height="380" viewBox="0 0 420 380" fill="none">
          {/* Organic Scattered Floating Dots (No Circles/Rings) */}
          {[
            { cx: 55, cy: 320, r: 4, color: '#F59E0B', glow: true },
            { cx: 115, cy: 340, r: 3, color: '#2563EB', glow: false },
            { cx: 75, cy: 250, r: 4.5, color: '#38BDF8', glow: true },
            { cx: 145, cy: 275, r: 2.5, color: '#CBD5E1', glow: false },
            { cx: 105, cy: 195, r: 3.5, color: '#10B981', glow: true },
            { cx: 175, cy: 220, r: 4, color: '#F59E0B', glow: true },
            { cx: 225, cy: 285, r: 2.4, color: '#94A3B8', glow: false },
            { cx: 255, cy: 210, r: 3.5, color: '#2563EB', glow: true },
            { cx: 165, cy: 145, r: 4.2, color: '#38BDF8', glow: true },
            { cx: 95, cy: 135, r: 2.5, color: '#CBD5E1', glow: false },
            { cx: 225, cy: 125, r: 3, color: '#818CF8', glow: false },
            { cx: 290, cy: 155, r: 4.5, color: '#F59E0B', glow: true },
            { cx: 185, cy: 75, r: 3.5, color: '#2563EB', glow: true },
            { cx: 125, cy: 85, r: 2.2, color: '#94A3B8', glow: false },
            { cx: 265, cy: 75, r: 3, color: '#38BDF8', glow: true },
            { cx: 330, cy: 110, r: 2.4, color: '#CBD5E1', glow: false },
            { cx: 45, cy: 210, r: 3, color: '#818CF8', glow: false },
            { cx: 310, cy: 240, r: 3.5, color: '#10B981', glow: true },
            { cx: 200, cy: 350, r: 3, color: '#38BDF8', glow: false },
            { cx: 355, cy: 180, r: 2.5, color: '#F59E0B', glow: true },
          ].map((dot, idx) => (
            <circle
              key={`bl-dot-${idx}`}
              cx={dot.cx}
              cy={dot.cy}
              r={dot.r}
              fill={dot.color}
              style={{
                filter: dot.glow ? `drop-shadow(0 0 6px ${dot.color})` : undefined,
                animation: idx % 2 === 0 ? 'starGlow2 4s ease-in-out infinite' : 'starGlow1 4.6s ease-in-out infinite',
              }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};
