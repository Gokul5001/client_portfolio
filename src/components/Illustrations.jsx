// Original flat illustrations, one per section. All colours come from the site palette.
const INK = '#0c1222'
const BLUE = '#2b45f5'
const BLUE_DEEP = '#1d33c9'
const BLUE_SOFT = '#8fa0ff'
const SAFFRON = '#ffb224'

function Frame({ children }) {
  return (
    <svg className="art" viewBox="0 0 320 260" aria-hidden="true" focusable="false">
      <circle className="art__blob" cx="160" cy="130" r="118" />
      {children}
    </svg>
  )
}

export function EducationArt() {
  return (
    <Frame>
      <ellipse cx="160" cy="228" rx="106" ry="9" fill={INK} opacity="0.08" />
      {/* books */}
      <rect x="70" y="192" width="180" height="32" rx="5" fill={BLUE} />
      <rect x="84" y="200" width="120" height="4" rx="2" fill="#fff" opacity="0.5" />
      <rect x="84" y="208" width="70" height="4" rx="2" fill="#fff" opacity="0.35" />
      <rect x="86" y="160" width="156" height="32" rx="5" fill={INK} />
      <rect x="100" y="168" width="100" height="4" rx="2" fill="#fff" opacity="0.45" />
      <rect x="62" y="130" width="168" height="30" rx="5" fill={SAFFRON} />
      <rect x="76" y="138" width="90" height="4" rx="2" fill={INK} opacity="0.4" />
      {/* graduation cap */}
      <g transform="translate(0 12)">
        <path d="M112 86 v22 q48 24 96 0 v-22 z" fill={BLUE_DEEP} />
        <polygon points="160,34 252,68 160,102 68,68" fill={INK} />
        <polygon points="160,34 252,68 160,68" fill="#fff" opacity="0.1" />
        <line x1="236" y1="73" x2="236" y2="108" stroke={SAFFRON} strokeWidth="4" strokeLinecap="round" />
        <circle cx="236" cy="112" r="6" fill={SAFFRON} />
      </g>
    </Frame>
  )
}

export function ExperienceArt() {
  return (
    <Frame>
      <ellipse cx="160" cy="226" rx="116" ry="9" fill={INK} opacity="0.08" />
      {/* plant */}
      <ellipse cx="62" cy="168" rx="8" ry="18" fill={BLUE_SOFT} transform="rotate(-25 62 168)" />
      <ellipse cx="78" cy="166" rx="8" ry="20" fill={BLUE} transform="rotate(20 78 166)" />
      <path d="M54 206 l4-24 h24 l4 24 z" fill={BLUE_DEEP} />
      {/* monitor */}
      <rect x="98" y="52" width="164" height="118" rx="10" fill={INK} />
      <rect x="108" y="62" width="144" height="94" rx="4" fill="#fff" />
      <rect x="122" y="116" width="16" height="30" rx="2" fill={BLUE} />
      <rect x="146" y="100" width="16" height="46" rx="2" fill={SAFFRON} />
      <rect x="170" y="84" width="16" height="62" rx="2" fill={BLUE} />
      <rect x="194" y="72" width="16" height="74" rx="2" fill={SAFFRON} />
      <rect x="218" y="74" width="24" height="4" rx="2" fill="#c9cde0" />
      <rect x="218" y="84" width="24" height="4" rx="2" fill="#c9cde0" />
      <rect x="218" y="94" width="16" height="4" rx="2" fill="#c9cde0" />
      <rect x="168" y="170" width="24" height="22" fill={INK} />
      <rect x="144" y="190" width="72" height="8" rx="4" fill={INK} />
      {/* desk */}
      <rect x="40" y="206" width="240" height="10" rx="5" fill={INK} />
      {/* briefcase */}
      <path d="M252 168 v-8 a4 4 0 0 1 4-4 h12 a4 4 0 0 1 4 4 v8" fill="none" stroke={INK} strokeWidth="5" />
      <rect x="234" y="168" width="58" height="38" rx="6" fill={SAFFRON} />
      <rect x="259" y="182" width="8" height="8" rx="2" fill={INK} />
    </Frame>
  )
}

export function ProjectsArt() {
  return (
    <Frame>
      <ellipse cx="160" cy="228" rx="110" ry="9" fill={INK} opacity="0.08" />
      {/* easel */}
      <path d="M160 150 L112 226 M160 150 L208 226 M160 140 V226" stroke={INK} strokeWidth="6" strokeLinecap="round" fill="none" />
      <rect x="86" y="36" width="148" height="118" rx="6" fill="#fff" stroke={INK} strokeWidth="6" />
      <circle cx="128" cy="76" r="16" fill={SAFFRON} />
      <polygon points="150,132 184,84 218,132" fill={BLUE} />
      <rect x="100" y="112" width="40" height="20" rx="3" fill={INK} />
      <rect x="92" y="150" width="136" height="8" rx="3" fill={INK} />
      {/* palette */}
      <ellipse cx="262" cy="192" rx="40" ry="30" fill="#fff" stroke={INK} strokeWidth="5" />
      <circle cx="246" cy="182" r="6" fill={BLUE} />
      <circle cx="262" cy="175" r="6" fill={SAFFRON} />
      <circle cx="278" cy="183" r="6" fill={INK} />
      <circle cx="252" cy="201" r="6" fill={BLUE_SOFT} />
      <ellipse cx="282" cy="204" rx="6" ry="5" className="art__blob" />
    </Frame>
  )
}

export function CertificatesArt() {
  return (
    <Frame>
      <ellipse cx="160" cy="228" rx="106" ry="9" fill={INK} opacity="0.08" />
      <rect x="66" y="52" width="188" height="132" rx="8" fill="#fff" stroke={INK} strokeWidth="6" />
      <rect x="78" y="64" width="164" height="108" rx="4" fill="none" stroke={SAFFRON} strokeWidth="2" />
      <rect x="108" y="84" width="104" height="8" rx="4" fill={INK} />
      <rect x="124" y="102" width="72" height="5" rx="2.5" fill="#c9cde0" />
      <rect x="116" y="116" width="88" height="5" rx="2.5" fill="#c9cde0" />
      <rect x="132" y="130" width="56" height="5" rx="2.5" fill="#c9cde0" />
      {/* medal */}
      <polygon points="200,184 188,228 204,218 214,232 220,186" fill={BLUE} />
      <polygon points="232,184 244,228 228,218 218,232 212,186" fill={BLUE_DEEP} />
      <circle cx="216" cy="164" r="26" fill={SAFFRON} stroke={INK} strokeWidth="5" />
      <circle cx="216" cy="164" r="14" fill="none" stroke={INK} strokeWidth="3" />
      <circle cx="216" cy="164" r="5" fill={INK} />
    </Frame>
  )
}

export function ContactArt() {
  return (
    <Frame>
      <path d="M120 74 C150 40 190 40 208 54" stroke="#fff" strokeOpacity="0.55" strokeWidth="3" strokeDasharray="4 7" strokeLinecap="round" fill="none" />
      {/* paper plane */}
      <polygon points="214,34 290,64 236,80" fill={SAFFRON} />
      <polygon points="236,80 290,64 228,106" fill="#e29a10" />
      {/* envelope */}
      <rect x="76" y="108" width="168" height="108" rx="10" fill="#fff" />
      <path d="M76 116 q0-8 8-8 h152 q8 0 8 8 L160 176 Z" fill={BLUE} />
      <path d="M80 212 L140 160 M240 212 L180 160" stroke="#c9cde0" strokeWidth="3" strokeLinecap="round" />
    </Frame>
  )
}
