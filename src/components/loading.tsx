import React from 'react'

const Loading = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white shadow-2xl overflow-hidden my-8 animate-pulse">
    <div className="grid grid-cols-1 lg:grid-cols-12">

      <div className="lg:col-span-5 bg-gray-400 relative min-h-screen lg:min-h-0">
        <div className="absolute inset-0 bg-gray-400"></div>

        <div className="relative z-10 p-10 pt-16 space-y-8">
          <div className="h-14 bg-gray-300 rounded w-4/5"></div>
          <div className="h-8 bg-gray-400 rounded w-3/4"></div>
          <div className="space-y-3 max-w-xs">
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded w-11/12"></div>
            <div className="h-4 bg-gray-300 rounded w-10/12"></div>
            <div className="h-4 bg-gray-300 rounded w-9/12"></div>
          </div>

          {[...Array(5)].map((_, i) => (
            <div key={i} className="mt-12">
              <div className="h-6 bg-gray-200 rounded w-32 mb-6"></div>
              <div className="space-y-3">
                {i < 3
                  ? [...Array(3)].map((_, j) => (
                      <div key={j} className="flex items-center gap-4">
                        <div className="w-5 h-5 bg-gray-400 rounded"></div>
                        <div className="h-4 bg-gray-300 rounded w-48"></div>
                      </div>
                    ))
                  : [...Array(4)].map((_, j) => (
                      <div key={j} className="h-4 bg-gray-300 rounded w-40"></div>
                    ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-7 bg-white p-10 lg:p-16 space-y-16">
        <div className="h-12 bg-gray-300 rounded w-80"></div>

        <div className="space-y-12">
          {[...Array(3)].map((_, i) => (
            <div key={i}>
              <div className="h-8 bg-gray-400 rounded w-64 mb-2"></div>
              <div className="h-5 bg-gray-400 rounded w-96 mb-6"></div>
              <div className="space-y-3 ml-6">
                {[...Array(i === 0 ? 3 : 2)].map((_, j) => (
                  <div key={j} className="h-4 bg-gray-300 rounded w-full"></div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="h-12 bg-gray-300 rounded w-48 mt-16 mb-10"></div>
          <div className="space-y-10">
            {[...Array(2)].map((_, i) => (
              <div key={i}>
                <div className="h-8 bg-gray-400 rounded w-80 mb-2"></div>
                <div className="h-5 bg-gray-400 rounded w-72 mb-3"></div>
                <div className="h-4 bg-gray-300 rounded w-40"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="h-20 bg-white"></div>
  </div>
  )
}

export default React.memo(Loading)