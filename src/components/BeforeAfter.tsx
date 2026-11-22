'use client'

import { useState, type CSSProperties } from 'react'

import { ArrowsIcon } from './Icons'

type Props = {
  id: string
  caption: string
  beforeLabel: string
  afterLabel: string
  layout: 'wide' | 'tall'
}

export function BeforeAfter({ id, caption, beforeLabel, afterLabel, layout }: Props) {
  const [pos, setPos] = useState(50)

  return (
    <figure className={`ba ba--${layout}`}>
      <div className="ba-frame" style={{ '--pos': `${pos}%` } as CSSProperties}>
        <img className="layer" src={`/gallery/${id}-before.webp`} alt={`${caption}: ${beforeLabel}`} loading="lazy" decoding="async" />
        <img className="layer after" src={`/gallery/${id}-after.webp`} alt={`${caption}: ${afterLabel}`} loading="lazy" decoding="async" />
        <span className="tag l">{beforeLabel}</span>
        <span className="tag r">{afterLabel}</span>
        <input
          type="range"
          id={`ba-${id}`}
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={caption}
        />
        <span className="line" />
        <span className="knob">
          <ArrowsIcon width={20} height={20} />
        </span>
      </div>
      <figcaption className="ba-cap">{caption}</figcaption>
    </figure>
  )
}
