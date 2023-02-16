import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { authDetail } from './app/services/auth'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const AdminLogin = React.lazy(() => import('./views/admin/Login'))
const HospitalLogin = React.lazy(() => import('./views/hospital/Login'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

function App(props) {
  const { isLoggedIn } = useSelector(state => state.auth);
  let url = '/404'
  if(isLoggedIn){
  const role = authDetail()?.role 
  url ='/'+role+'/dashboard';
  } 


  return (
    <HashRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route exact path="/admin/login" name="Login Page" element={!isLoggedIn ? <AdminLogin /> : <Navigate to={url} replace/>} />
          <Route exact path="/hospital/login" name="Login Page" element={!isLoggedIn ? <HospitalLogin /> : <Navigate to={url} replace/>}  />
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />
          <Route path="*" name="Home" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App