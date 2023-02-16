import React from 'react'
const dashboard = React.lazy(() => import('./pages/Dashboard'))
const doctorCreate = React.lazy(() => import('./pages/doctor/create'))
const doctorIndex = React.lazy(() => import('./pages/doctor/index'))
const hospitalroutes = [
  { path: '/dashboard', name: 'Dashboard', element: dashboard },
  { path: '/doctor', name: 'Doctor', element: doctorIndex, exact: true },
  { path: '/doctor/index', name: 'Index', element: doctorIndex },
  { path: '/doctor/create', name: 'Create', element: doctorCreate },
]
export default hospitalroutes
