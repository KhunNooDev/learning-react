import { useState, useEffect } from 'react'
export default function Time() {
  const [clock, setClock] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    setInterval(() => {
      setClock(new Date().toLocaleTimeString())
    }, 1000)
  }, [])
  return (
    <>
      <h3>Time is {clock}</h3>
    </>
  )
}
