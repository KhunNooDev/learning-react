import { useState } from 'react'
import { Routes, Route, NavLink, Outlet } from 'react-router-dom'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap'
import Home from './pages/home'
import Time from './pages/time'
import Form from './pages/form'
import Todolist from './pages/todolist'

export default function App() {
  /* const datapath 
    datapath is an array of objects with text and path properties for each link 
    in the header nav bar and the current page in the main content area (Outlet)
  */
  const webName = 'Learn-React'
  const datapath = [
    { text: 'Home', path: '/', component: Home },
    { text: 'Time', path: '/time', component: Time },
    { text: 'From', path: '/from', component: Form },
    { text: 'Todolist', path: '/todolist', component: Todolist },
  ]
  return (
    <>
      <Routes>
        <Route
          path={datapath[0].path}
          element={<Header webname={webName} datapath={datapath} />}
        >
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
  const webName = props.webname
  // openMenu is used to toggle the navbar collapse on small screens
  const [openMenu, setOpenMenu] = useState(false)
  const toggle = () => setOpenMenu(!openMenu)
  return (
    <>
      <section className='container-fluid'>
        <Navbar color='light' expand='md' light>
          <NavbarBrand
            to='/'
            tag={NavLink}
            style={{ textTransform: 'uppercase' }}
          >
            {webName}
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={openMenu} navbar>
            <Nav className='me-auto' navbar>
              {datapath.map((item) => (
                <NavItem key={item.text}>
                  <BSNavLink to={item.path} tag={NavLink}>
                    {item.text}
                  </BSNavLink>
                </NavItem>
              ))}
              {/* <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
            <Nav navbar>
              <NavItem>
                <BSNavLink to='/' tag={NavLink}>
                  Sign In
                </BSNavLink>
              </NavItem>
              <NavItem>
                <BSNavLink to='/' tag={NavLink}>
                  Sign Up
                </BSNavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </section>
      <section className='container'>
        <Outlet />
      </section>
    </>
  )
}
