import React from 'react'
import Loading from './components/loading'

export const widthSuspense = (component: React.ReactNode) => {
  return (
    <React.Suspense fallback={<Loading />} >
      {component}
    </React.Suspense>
  )
}