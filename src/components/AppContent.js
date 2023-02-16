import React, { Suspense } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import routes from '../routes'

import { authDetail }  from '../app/services/auth'
  
const AppContent = () => {
  const location = useLocation();
  const pathParts = location.pathname.split('/');

  const userOrAdmin = pathParts[1];

  const role = authDetail()?.role 
  let url = "/"+role+"/login"
  if(!role){
    url = '/'+userOrAdmin+'/login';
  }

  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          
          {routes.map((route, idx) => {
             if(!(route.path).startsWith('/'+role)){ 
             return <Route  key={idx} path={route.path} element={<Navigate to={url} replace />}/>
             }
               
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
          <Route path="*" element={<Navigate to="404" replace />} />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
