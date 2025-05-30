import React from 'react'
const dashboard = React.lazy(() => import('./pages/Dashboard'))
const hospitalCreate = React.lazy(() => import('./pages/hospital/create'))
const hospitalIndex = React.lazy(() => import('./pages/hospital/index'))
const adminRoutes = [
  { path: '/', exact: true, name: 'Dashboard', element: dashboard },
  { path: '/dashboard', name: 'Dashboard', element: dashboard },
  { path: '/hospital', name: 'Hospital', element: hospitalIndex, exact: true },
  { path: '/hospital/index', name: 'Index', element: hospitalCreate },
  { path: '/hospital/create', name: 'Create', element: hospitalIndex },
]
export default adminRoutes
