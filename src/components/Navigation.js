import { Button, Nav } from 'react-bootstrap'
import { Route, Link, Routes, useNavigate } from 'react-router-dom'
import HomePage from '../routes/HomePage'
import MenuPage from '../routes/MenuPage'
import LoginPage from '../routes/LoginPage'
import NotFoundPage from '../routes/NotFoundPage'
import MyMenu from './MyMenu'

const Navigation = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    window.localStorage.clear()
    navigate('/login')
  }

  return (
      <div>
          <header>
            <Nav className="justify-content-end">
                {
                  window.localStorage.getItem('loggedChallengeUser')
                    ?
                    <>
                      <Link to="/">Home</Link>
                      <Button onClick={handleLogout} >Logout</Button>
                    </>
                    :<Link to="/login">Login</Link>
                }
            </Nav>
          </header>
          <Routes>
            <Route path='/' element={<HomePage/>}>
              <Route path='mymenu' element={<MyMenu/>}/>
            </Route>
            <Route path='*' element={<NotFoundPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/search/:id' element={<MenuPage />} />
          </Routes>
      </div>
  )
}

export default Navigation
