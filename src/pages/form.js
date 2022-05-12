import { useState } from 'react'

export default function Form() {
  const [valueform, setValueform] = useState({
    name: '',
    password: '',
  })
  const handleChange = (e) => {
    const newdata = { ...valueform }
    newdata[e.target.name] = e.target.value
    setValueform(newdata)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('You clicked submit.')
    console.log('You get data', valueform)
  }
  return (
    <>
      <h1>Form Page</h1>
      <form onSubmit={handleSubmit}>
        <label> Name: </label>
        <input type='text' name='name' id='name' onChange={handleChange} />
        <label> Pass: </label>
        <input type='password' name='password' onChange={handleChange} />
        <button type='submit'>Submit</button>
      </form>
      {valueform.name ? <h3>You get Name : {valueform.name}</h3> : null}
    </>
  )
}
