import { useState, useEffect } from 'react'
import axios from 'axios'
export default function reacthook() {
  return (
    <>
      <section className='row'>
        <div className='col'>
          <h1>This is UseState</h1>
          <StateHook />
        </div>
        <div className='col'>
          <h1>This is UseEffect</h1>
          <EffectHook />
        </div>
      </section>
      <section>
        <h1>This is UseEffect fetch data by axios</h1>
        <EffectHookFetch />
      </section>
    </>
  )
}

function StateHook() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

function EffectHook() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

function EffectHookFetch() {
  const randomCat = () => axios.get('https://aws.random.cat/meow')

  const [cat, setCat] = useState({})
  const handleOnClick = () => {
    randomCat().then((res) => {
      setCat(res.data)
    })
  }
  useEffect(() => {
    handleOnClick()
    //   randomCat().then((response) => {
    //     setCat(response.data)
    //   })
  }, [])

  // ใส่ log เพื่อดูว่ามัน render ยังไง
  console.log('render >>>')

  return (
    <>
      <button
        style={{
          padding: '8px 16px',
          borderRadius: 4,
          fontSize: '1.25rem',
        }}
        onClick={() => handleOnClick()}
      >
        Click Random Cat
      </button>

      <p>
        <img src={cat.file} alt='Meow' width='256' />
      </p>
    </>
  )
}
