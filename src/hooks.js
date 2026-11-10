import { useEffect, useState } from 'react'

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

// 0 → 1 while a tall section scrolls past (used by the sticky "scroll plays it" sections).
export function useSectionProgress(ref) {
  const [p, setP] = useState(0)

  useEffect(() => {
    let raf
    const calc = () => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const span = r.height - window.innerHeight
      setP(span > 0 ? Math.min(1, Math.max(0, -r.top / span)) : 0)
    }
    const on = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(calc)
    }
    calc()
    window.addEventListener('scroll', on, { passive: true })
    window.addEventListener('resize', on)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', on)
      window.removeEventListener('resize', on)
    }
  }, [ref])

  return p
}

// Scroll the page so a tall section sits at progress p (0..1).
export function scrollToProgress(el, p) {
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY
  const span = el.offsetHeight - window.innerHeight
  window.scrollTo({ top: top + span * p + 1, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
}

// True once an element has entered the viewport.
export function useInView(ref, margin = '-12% 0px') {
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    if (!('IntersectionObserver' in window)) {
      setSeen(true)
      return undefined
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { rootMargin: margin }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [ref, margin])

  return seen
}

// Types text out once `start` becomes true.
export function useTyped(text, start, speed = 28) {
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!start) return undefined
    if (prefersReducedMotion()) {
      setN(text.length)
      return undefined
    }
    setN(0)
    const t = setInterval(() => {
      setN((v) => {
        if (v >= text.length) {
          clearInterval(t)
          return v
        }
        return v + 1
      })
    }, speed)
    return () => clearInterval(t)
  }, [text, start, speed])

  return text.slice(0, n)
}

// Letters shuffle, then settle into the real word.
export function useScramble(text, start) {
  const [out, setOut] = useState(text)

  useEffect(() => {
    if (!start || prefersReducedMotion()) {
      setOut(text)
      return undefined
    }
    const chars = 'ABCDEFGHKMNPRSTUVXZ0123456789'
    let frame = 0
    const total = text.length * 3
    const t = setInterval(() => {
      frame += 1
      const settled = Math.floor((frame / total) * text.length)
      setOut(
        text
          .split('')
          .map((c, i) => (c === ' ' || i < settled ? c : chars[Math.floor(Math.random() * chars.length)]))
          .join('')
      )
      if (frame >= total) {
        clearInterval(t)
        setOut(text)
      }
    }, 45)
    return () => clearInterval(t)
  }, [text, start])

  return out
}
