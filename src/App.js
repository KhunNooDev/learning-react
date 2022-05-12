import { Routes, Route, Link, Outlet } from 'react-router-dom'

import Home from './pages/home'
import Page2 from './pages/page2'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route path='/' element={<Home />} />
          <Route path='page2' element={<Page2 />} />
        </Route>
      </Routes>
    </>
  )
}

function Header() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/page2'>Page 2</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Outlet />
      </section>
    </>
  )
}
