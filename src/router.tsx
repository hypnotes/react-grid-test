import { Navigate, type RouteObject } from 'react-router'
import FeaturePage from '@pages/FeaturePage'
import LandingPage from '@pages/LandingPage'
import Page404 from '@pages/Page404'

const routes: RouteObject[] = [
  {
    path: '',
    element: <LandingPage />
  },
  {
    path: 'features',
    element: <FeaturePage />
  },
  {
    path: 'testimonials',
    element: <LandingPage />
  },
  {
    path: 'highlights',
    element: <LandingPage />
  },
  {
    path: 'pricing',
    element: <LandingPage />
  },
  {
    path: 'faq',
    element: <LandingPage />
  },
  {
    path: 'status',
    children: [
      {
        path: '404',
        element: <Page404 />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/status/404" replace />
  }
]

export default routes
