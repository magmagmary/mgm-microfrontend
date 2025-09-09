
import React from 'react'

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md mx-auto px-6">
        {/* Progress bar container */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
          {/* Animated progress bar */}
          <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-pulse relative">
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
          </div>
        </div>
        
        {/* Progress percentage */}
        <div className="text-center mt-4">
          <span className="text-sm text-gray-500 font-medium">
            Please wait...
          </span>
        </div>
        
        {/* Animated dots */}
        <div className="flex justify-center mt-6 space-x-1">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  )
}

export default Loading