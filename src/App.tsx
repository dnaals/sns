import { Routes,Route, Outlet } from 'react-router'
import './App.css'
import Index from './pages/Index'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Counter from './pages/Counter'

function AuthLayout(){
  return(
    <div>
      <header>Auth!</header>
      <Outlet />
    </div>
  )
}

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/counter' element={<Counter />} />
      <Route element={<AuthLayout />}>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Route>
    </Routes>
  )
}

export default App
