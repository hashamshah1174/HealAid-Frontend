import adminroutes from './views/admin/routes'
import hospitalroutes from './views/hospital/routes'

const routes = [
  { path: '/', exact: true, name: 'Home' },
  ...adminroutes.map((route) => {
    return {
      ...route,
      path: `/admin${route.path}`,
      name: `${route.name}`,
    }
  }),
  ...hospitalroutes.map((route) => {
    return {
      ...route,
      path: `/hospital${route.path}`,
      name: `${route.name}`,
    }
  }),
 
]

export default routes
