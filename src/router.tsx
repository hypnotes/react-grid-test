import { Navigate, type RouteObject } from 'react-router'
import CommitteePage from '@pages/CommitteePage'
import HomePage from '@pages/HomePage'
import KeynotePage from '@pages/KeynotePage'
import Page404 from '@pages/Page404'
import ProgramPage from '@pages/ProgramPage'

const routes: RouteObject[] = [
  {
    path: '',
    element: <HomePage />
  },
  {
    path: 'committee',
    element: <CommitteePage />
  },
  {
    path: 'keynote',
    element: <KeynotePage />
  },
  {
    path: 'keynote/:speaker',
    element: <KeynotePage />
  },
  {
    path: 'program',
    element: <ProgramPage />
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
