/**
 * Decorative dental-themed SVG background pattern.
 * Creates a subtle wallpaper effect with dental icons (tooth, implant,
 * toothbrush, mirror, braces, sparkle) — inspired by the Instagram brand posts.
 */
export default function DentalPattern({ opacity = 0.04, color = "#ffffff" }: { opacity?: number; color?: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dental-pattern" x="0" y="0" width="180" height="180" patternUnits="userSpaceOnUse" patternTransform="rotate(-8)">
            {/* Tooth */}
            <g transform="translate(10, 10) scale(0.7)" fill="none" stroke={color} strokeWidth="1.8" opacity={opacity}>
              <path d="M20 8c-2.5-3.5-7-4-9.5-2.5S7 11 8.5 14.5c1.5 3.5 2.5 7 3 10.5s1.5 7.5 3.5 7.5 3-3 3.5-3 1.5 3 3.5 3 3-3.5 3.5-7.5 1.5-7 3-10.5S28.5 6.5 26 5.5 22.5 4.5 20 8z"/>
            </g>
            {/* Implant screw */}
            <g transform="translate(100, 15) scale(0.65)" fill="none" stroke={color} strokeWidth="1.8" opacity={opacity}>
              <rect x="10" y="3" width="10" height="10" rx="2"/>
              <path d="M12 13v3h6v-3M12 16l-1.5 5h9l-1.5-5M14 21v4M16 21v4M13 25h4"/>
            </g>
            {/* Toothbrush */}
            <g transform="translate(55, 95) scale(0.6) rotate(-30)" fill="none" stroke={color} strokeWidth="1.8" opacity={opacity}>
              <rect x="2" y="12" width="6" height="18" rx="3"/>
              <line x1="5" y1="12" x2="5" y2="3"/>
              <rect x="1" y="1" width="8" height="4" rx="1"/>
              <line x1="3" y1="1" x2="3" y2="5"/>
              <line x1="5" y1="1" x2="5" y2="5"/>
              <line x1="7" y1="1" x2="7" y2="5"/>
            </g>
            {/* Dental mirror */}
            <g transform="translate(140, 85) scale(0.6)" fill="none" stroke={color} strokeWidth="1.8" opacity={opacity}>
              <circle cx="15" cy="10" r="7"/>
              <line x1="15" y1="17" x2="15" y2="32"/>
            </g>
            {/* Sparkle / shine */}
            <g transform="translate(20, 130) scale(0.55)" fill="none" stroke={color} strokeWidth="1.5" opacity={opacity}>
              <path d="M15 5l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z"/>
            </g>
            {/* Small tooth */}
            <g transform="translate(110, 140) scale(0.45)" fill="none" stroke={color} strokeWidth="2" opacity={opacity}>
              <path d="M20 8c-2.5-3.5-7-4-9.5-2.5S7 11 8.5 14.5c1.5 3.5 2.5 7 3 10.5s1.5 7.5 3.5 7.5 3-3 3.5-3 1.5 3 3.5 3 3-3.5 3.5-7.5 1.5-7 3-10.5S28.5 6.5 26 5.5 22.5 4.5 20 8z"/>
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dental-pattern)" />
      </svg>
    </div>
  );
}
