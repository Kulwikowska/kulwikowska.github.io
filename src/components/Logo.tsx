// Recreated MF Crystal Care logo: roof with window, sparkles, heart, MF monogram and swoosh.

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 150" className={className} aria-hidden="true">
      <LogoMarkShapes />
    </svg>
  )
}

function LogoMarkShapes() {
  return (
    <>
      <path d="M38 78 100 26l62 52" fill="none" stroke="#24407F" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M124 46V30h12v26" fill="#24407F" />
      <g fill="#24407F">
        <rect x="92" y="46" width="7" height="7" rx="1" />
        <rect x="101" y="46" width="7" height="7" rx="1" />
        <rect x="92" y="55" width="7" height="7" rx="1" />
        <rect x="101" y="55" width="7" height="7" rx="1" />
      </g>
      <path d="M34 128C14 104 26 76 52 66 34 82 32 106 50 124Z" fill="#E04A7F" />
      <path d="M46 132C34 112 42 92 60 84 48 98 50 116 62 128Z" fill="#7FB8E4" />
      <text x="104" y="128" textAnchor="middle" fontFamily="var(--font-nunito), Nunito, sans-serif" fontWeight="900" fontSize="64" fill="#24407F" letterSpacing="-3">
        MF
      </text>
      <path d="M170 52c-6-12-24-6-16 8l16 14 16-14c8-14-10-20-16-8Z" fill="#E04A7F" transform="rotate(12 170 60)" />
      <path fill="#5FA3DC" d="M60 30Q60 40 70 40Q60 40 60 50Q60 40 50 40Q60 40 60 30Z" />
      <path fill="#5FA3DC" d="M150 84Q150 92 158 92Q150 92 150 100Q150 92 142 92Q150 92 150 84Z" />
      <path fill="#5FA3DC" d="M82 10Q82 16 88 16Q82 16 82 22Q82 16 76 16Q82 16 82 10Z" />
    </>
  )
}

export function LogoFull({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 190" className={className} role="img" aria-label="MF Crystal Care · Home Service">
      <LogoMarkShapes />
      <text x="100" y="168" textAnchor="middle" fontFamily="var(--font-script), 'Dancing Script', cursive" fontWeight="700" fontSize="34" fill="#E04A7F">
        Crystal Care
      </text>
      <text x="100" y="186" textAnchor="middle" fontFamily="var(--font-nunito), Nunito, sans-serif" fontWeight="800" fontSize="10.5" fill="#24407F" letterSpacing="3.6">
        HOME SERVICE
      </text>
    </svg>
  )
}
