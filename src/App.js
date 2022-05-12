import { Routes, Route, Link, Outlet } from 'react-router-dom'

import Home from './pages/home'
import Time from './pages/time'
import Form from './pages/form'

export default function App() {
  /* const datapath 
    datapath is an array of objects with text and path properties for each link 
    in the header nav bar and the current page in the main content area (Outlet)
  */
  const datapath = [
    { text: 'Home', path: '/', component: Home },
    { text: 'Time', path: '/time', component: Time },
    { text: 'From', path: '/from', component: Form },
  ]
  return (
    <>
      <Routes>
        <Route path={datapath[0].path} element={<Header datapath={datapath} />}>
          {datapath.map((item) => (
            <Route
              key={item.text}
              path={item.path}
              element={<item.component />}
            />
          ))}
        </Route>
      </Routes>
    </>
  )
}

function Header(props) {
  const datapath = [...props.datapath]
  return (
    <>
      <nav>
        <ul>
          {datapath.map((item) => (
            <li key={item.text}>
              <Link to={item.path}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <section>
        <Outlet />
      </section>
    </>
  )
}
