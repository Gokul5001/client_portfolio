import { useEffect, useRef } from 'react'
import './Cursor.css'

// Ring that trails the pointer plus a dot that sticks to it. Only on mouse devices.
function Cursor() {
  const ring = useRef(null)
  const dot = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined
    document.documentElement.classList.add('has-cursor')
    let x = -100, y = -100, rx = -100, ry = -100, raf
    const move = (e) => {
      x = e.clientX
      y = e.clientY
      if (dot.current) dot.current.style.transform = `translate(${x}px, ${y}px)`
      const hot = e.target.closest?.('a, button, [role="button"]')
      ring.current?.classList.toggle('is-hot', !!hot)
    }
    const loop = () => {
      rx += (x - rx) * 0.16
      ry += (y - ry) * 0.16
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', move)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
      document.documentElement.classList.remove('has-cursor')
    }
  }, [])

  return (
    <>
      <div ref={ring} className="cur cur--ring" aria-hidden="true"></div>
      <div ref={dot} className="cur cur--dot" aria-hidden="true"></div>
    </>
  )
}

export default Cursor
