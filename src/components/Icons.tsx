import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const line = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"
      />
    </svg>
  )
}

export function SparkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M12 1Q12 12 23 12Q12 12 12 23Q12 12 1 12Q12 12 12 1Z" />
    </svg>
  )
}

export function HouseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...line} d="M3 11 12 4l9 7M5.5 9.5V20h13V9.5M10 20v-5h4v5" />
    </svg>
  )
}

export function WindowIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g {...line}>
        <rect x="4" y="3" width="16" height="18" rx="1.5" />
        <path d="M12 3v18M4 12h16" />
      </g>
    </svg>
  )
}

export function CurtainIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g {...line}>
        <path d="M2 4h20" />
        <path d="M5 4c0 6 1 10 4 16H5M19 4c0 6-1 10-4 16h4" />
        <path d="M9 4c0 4-.5 7-2 9M15 4c0 4 .5 7 2 9" />
      </g>
    </svg>
  )
}

export function TruckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g {...line}>
        <path d="M2 6h12v10H2zM14 9h4l3 3.5V16h-7" />
        <circle cx="6" cy="17.5" r="1.8" />
        <circle cx="17" cy="17.5" r="1.8" />
      </g>
    </svg>
  )
}

export function SparklesIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g {...line}>
        <path d="M10 3q0 7 7 7-7 0-7 7 0-7-7-7 7 0 7-7Z" />
        <path d="M18 14q0 3.5 3.5 3.5Q18 17.5 18 21q0-3.5-3.5-3.5Q18 17.5 18 14Z" />
      </g>
    </svg>
  )
}

export function BowlIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g {...line}>
        <path d="M3 11h18a9 9 0 0 1-18 0Z" />
        <path d="M8 7c0-1.5 1-1.5 1-3M12 7c0-1.5 1-1.5 1-3M16 7c0-1.5 1-1.5 1-3" />
      </g>
    </svg>
  )
}

export function PinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z"
      />
    </svg>
  )
}

export function ArrowsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...line} strokeWidth={2.2} d="M9 6 3 12l6 6M15 6l6 6-6 6" />
    </svg>
  )
}
