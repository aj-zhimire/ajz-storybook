import { useEffect, useRef } from 'react'

// Small deterministic hash for simple randomization
function hashString(str) {
  let h = 2166136261 >>> 0
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 16777619) >>> 0
  }
  return h
}

export default function WordCloud({ phrase }) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    // configurable palette and size range
    const colors = ['#ef476f', '#ffd166', '#06d6a0', '#118ab2', '#073b4c', '#f77f00', '#9b5de5', '#00bbf9']
    const minSize = 14 // px
    const maxSize = 44 // px

    // split phrase into words but keep contractions and hyphens as part of words
    const words = phrase.split(/\s+/).filter(Boolean)

    // create elements
    containerRef.current.innerHTML = ''
    words.forEach((w, i) => {
      // wrap each word in a link that opens the under-construction page
      const a = document.createElement('a')
      a.className = 'cloud-link'
      a.href = 'sawon-atoms.html'
      a.setAttribute('aria-label', `Open Sawon's showcase: ${w}`)

      // visual word node
      const span = document.createElement('span')
      span.className = 'cloud-word'
      span.textContent = w

      // size based on index randomness (repeatable-ish)
      const rand = (Math.abs(hashString(w + i)) % 100) / 100
      const size = Math.round(minSize + (maxSize - minSize) * rand)
      span.style.fontSize = size + 'px'

      // color
      span.style.color = colors[Math.abs(hashString(w)) % colors.length]

      // slight rotation
      const rot = Math.round(-20 + 40 * rand)
      span.style.transform = `rotate(${rot}deg)`

      // accessibility
      span.setAttribute('aria-hidden', 'true')

      a.appendChild(span)
      containerRef.current.appendChild(a)
    })
  }, [phrase])

  return (
    <div className="word-cloud-wrap">
      <div id="wordCloud" className="word-cloud" ref={containerRef}></div>
    </div>
  )
}
