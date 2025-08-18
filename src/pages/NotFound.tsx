import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const attemptedUrl = location.pathname;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6">
        <div className="max-w-3xl w-full text-center">
          {/* Vector Illustration */}
          <div className="mx-auto mb-8 max-w-xs">
            <svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <rect x="50" y="50" width="400" height="200" rx="10" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="2" />
              <line x1="50" y1="100" x2="450" y2="100" stroke="#E5E7EB" strokeWidth="2" />
              <line x1="50" y1="150" x2="450" y2="150" stroke="#E5E7EB" strokeWidth="2" />
              <line x1="50" y1="200" x2="450" y2="200" stroke="#E5E7EB" strokeWidth="2" />
              
              {/* Magnifying Glass */}
              <circle cx="250" cy="150" r="60" fill="none" stroke="#9CA3AF" strokeWidth="8" strokeDasharray="4 14" />
              <line x1="290" y1="190" x2="350" y2="250" stroke="#9CA3AF" strokeWidth="8" />
              
              {/* 404 Text */}
              <text x="250" y="140" textAnchor="middle" fontSize="48" fontWeight="bold" fill="#3B82F6">404</text>
            </svg>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          
          <div className="bg-gray-100 rounded-lg p-4 mb-8 inline-block max-w-lg">
            <p className="text-gray-600 font-mono text-sm sm:text-base break-all">
              Attempted URL: <span className="text-red-500">{attemptedUrl}</span>
            </p>
          </div>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            The requested resource could not be located. Please verify the URL or navigate back to our homepage.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="px-6 py-3 border border-gray-300 bg-white text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
            >
              Go Back
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm shadow-blue-500/30"
            >
              Homepage
            </button>
          </div>
        </div>
      </main>s  
    </div>
  );
};

export default NotFoundPage;