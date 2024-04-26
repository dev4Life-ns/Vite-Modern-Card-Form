import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import  DynamicDriverCard  from './pages/DynamicDriverCard'
import Error404  from './pages/Error404'
import  GuestForm  from './pages/GuestForm'
import ReservationForm from './pages/ReservationForm'
import  WelcomeScreen  from './pages/WelcomeScreen'

function PageRouter() {

  return (
    <Router>
      <Routes>
          <Route path="/" element={<DynamicDriverCard />} />
          <Route path="/welcomeScreen" element={<WelcomeScreen />} />
          <Route path="/guestForm" element={<GuestForm />} />
          <Route path="/reservationForm" element={<ReservationForm />} />
          <Route path="*" element={<Error404 />} />
          </Routes>
    </Router>
  )
}

export default PageRouter
