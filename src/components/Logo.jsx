/**
 * Southern Shine Clean Co TX — SVG Logo
 * variant: "dark"  → navy ink  (for light backgrounds)
 *          "light" → white ink (for dark backgrounds)
 */
export default function Logo({ variant = 'dark', size = 120 }) {
  const ink  = variant === 'dark' ? '#1a2744' : '#ffffff';
  const gold = '#c9973a';

  // 400×400 viewBox, circle center (200,200)
  const outerR = 182;
  const innerR = 163;

  // Sun dome sits in the upper-center of the circle
  const sunCx = 200, sunCy = 170, sunArcR = 60;

  // 13 rays radiating from just outside the arc
  const rays = Array.from({ length: 13 }, (_, i) => {
    const angleDeg = -160 + i * 11.67;
    const rad = (angleDeg * Math.PI) / 180;
    const r1 = sunArcR + 3;
    const r2 = sunArcR + 48;
    return {
      x1: sunCx + r1 * Math.cos(rad),
      y1: sunCy + r1 * Math.sin(rad),
      x2: sunCx + r2 * Math.cos(rad),
      y2: sunCy + r2 * Math.sin(rad),
      isCenter: i === 6,
    };
  });

  // Bottom arc path: two points on the inner circle in the lower-left / lower-right quadrants.
  // Using angle 148° and 32° (in SVG coords: 0°=right, 90°=down).
  // Going clockwise (sweep=1) the LONG way (large-arc=1) → passes through the very bottom (200, 363).
  // startOffset="50%" will center the text exactly at the bottom. ✓
  const bx1 = (200 + innerR * Math.cos((148 * Math.PI) / 180)).toFixed(2);
  const by1 = (200 + innerR * Math.sin((148 * Math.PI) / 180)).toFixed(2);
  const bx2 = (200 + innerR * Math.cos((32 * Math.PI) / 180)).toFixed(2);
  const by2 = (200 + innerR * Math.sin((32 * Math.PI) / 180)).toFixed(2);
  const bottomArcPath = `M ${bx1} ${by1} A ${innerR} ${innerR} 0 1 1 ${bx2} ${by2}`;

  const arcId = `btmArc-${variant}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Southern Shine Clean Co TX logo"
    >
      {/* ── Outer circle ── */}
      <circle cx="200" cy="200" r={outerR} stroke={ink} strokeWidth="9" fill="none" />

      {/* ── Inner gold circle ── */}
      <circle cx="200" cy="200" r={innerR} stroke={gold} strokeWidth="2.8" fill="none" />

      {/* ── Sun rays ── */}
      {rays.map((r, i) => (
        <line
          key={i}
          x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2}
          stroke={gold}
          strokeWidth={r.isCenter ? 4.5 : 2.8}
          strokeLinecap="round"
          opacity={1 - Math.abs(i - 6) * 0.06}
        />
      ))}

      {/* ── Sun dome arc ── */}
      <path
        d={`M ${sunCx - sunArcR} ${sunCy} A ${sunArcR} ${sunArcR} 0 0 1 ${sunCx + sunArcR} ${sunCy}`}
        stroke={gold}
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />

      {/* ── "Southern Shine" as one flowing script line ── */}
      <text
        x="200"
        y="278"
        textAnchor="middle"
        fontFamily="'Great Vibes', cursive"
        fontSize="96"
        fill={ink}
        letterSpacing="-2"
      >
        Southern Shine
      </text>

      {/* ── Left dash ── */}
      <line x1="44"  y1="302" x2="112" y2="302" stroke={ink} strokeWidth="2.2" />
      {/* ── Right dash ── */}
      <line x1="288" y1="302" x2="356" y2="302" stroke={ink} strokeWidth="2.2" />

      {/* ── "CLEAN CO. TX" ── */}
      <text
        x="200"
        y="308"
        textAnchor="middle"
        fontFamily="'Lato', Arial, sans-serif"
        fontWeight="900"
        fontSize="22"
        fill={ink}
        letterSpacing="4"
      >
        CLEAN CO. TX
      </text>

      {/* ── Gold divider line below CLEAN CO TX ── */}
      <line x1="90" y1="318" x2="310" y2="318" stroke={gold} strokeWidth="1.5" opacity="0.7" />

      {/* ── Gold Texas star ── */}
      <text
        x="200"
        y="342"
        textAnchor="middle"
        fontSize="20"
        fill={gold}
        fontFamily="Arial, sans-serif"
      >
        ★
      </text>

      {/* ── Curved bottom text (reads L→R along the bottom inside arc) ── */}
      <defs>
        <path id={arcId} d={bottomArcPath} />
      </defs>
      <text
        fontFamily="'Lato', Arial, sans-serif"
        fontWeight="700"
        fontSize="14"
        fill={gold}
        letterSpacing="1.8"
      >
        <textPath href={`#${arcId}`} startOffset="50%" textAnchor="middle">
          • HIGH-STANDARD CLEANING, TEXAS STRONG. •
        </textPath>
      </text>
    </svg>
  );
}
