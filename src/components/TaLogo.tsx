import { useId } from 'react';

interface TaLogoProps {
  className?: string;
}

export default function TaLogo({ className = '' }: TaLogoProps) {
  const gradientId = `ta-mark-${useId().replace(/:/g, '')}`;

  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradientId} x1="16" y1="18" x2="80" y2="78" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60A5FA" />
          <stop offset="0.52" stopColor="#3B82F6" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="90" height="90" rx="28" fill="#0B1228" />
      <rect
        x="3.75"
        y="3.75"
        width="88.5"
        height="88.5"
        rx="27.25"
        stroke={`url(#${gradientId})`}
        strokeOpacity="0.7"
        strokeWidth="1.5"
      />
      <circle cx="48" cy="48" r="35" stroke="white" strokeOpacity="0.1" />
      <path
        d="M19 25H49M34 25V69"
        stroke={`url(#${gradientId})`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="6"
      />
      <path
        d="M44 71L61 28L78 71M51 55H71"
        stroke={`url(#${gradientId})`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="6"
      />
      <circle cx="72" cy="20" r="3" fill="#22D3EE" />
    </svg>
  );
}
