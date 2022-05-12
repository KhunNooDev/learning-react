import { useState } from 'react'

export default function Todolist() {
  const [todos, setTodos] = useState(['item 1', 'item 2', 'item 3'])
  return (
    <>
      <h1>Todolist Page</h1>
      <TodoCount todos={todos} />
      <TodoList todos={todos} />
      <AddTodo todos={todos} setTodos={setTodos} />
    </>
  )
}

function TodoCount({ todos }) {
  return <div>Total Todos: {todos.length}</div>
}

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  )
}

function AddTodo({ todos, setTodos }) {
  // samedata is used for comparing the value of the input field
  const [samedata, setSamedata] = useState(false)
  const handleChange = (e) => {
    const newdata = { ...todos }
    setSamedata(Object.values(newdata).indexOf(e.target.value) > -1)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // todo is the value of the input
    const todo = e.target.elements.todo.value
    // prevTodos is the array of todos before adding the new todo
    setTodos((prevTodos) => [...prevTodos, todo])
    e.target.elements.todo.value = ''
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' id='todo' onChange={handleChange} />
      <button disabled={samedata ? true : false} type='submit'>
        Add Todo
      </button>
      {samedata ? <p style={{ color: 'red' }}>Data exists duplicates</p> : null}
    </form>
  )
}
