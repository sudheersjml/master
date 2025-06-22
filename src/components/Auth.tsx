import React, { useState, useEffect } from 'react';
import { Shield, Moon, Sun } from 'lucide-react';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import { useAuth } from '../hooks/useAuth';

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { user, isLoading, error, login, register, forgotPassword, logout, clearError } = useAuth();

  // Initialize dark mode based on system preference
  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Show dashboard when user is logged in
  if (user) {
    return <Dashboard user={user} onLogout={logout} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 transition-colors duration-300">
      {/* Header */}
      <header className="relative p-6">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                Prantek
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Secure Authentication System
              </p>
            </div>
          </div>
          
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center px-4 pb-12">
        <div className="w-full max-w-6xl">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
              <div className="flex min-h-[600px]">
                {/* Left Side - Login */}
                <div className={`flex-1 p-12 transition-all duration-500 ${
                  isLogin 
                    ? 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20' 
                    : 'bg-gray-50 dark:bg-gray-700'
                }`}>
                  <div className="flex flex-col justify-center h-full">
                    <div className="mb-8">
                      <button
                        onClick={() => {
                          setIsLogin(true);
                          clearError();
                        }}
                        className={`text-2xl font-bold transition-all duration-200 ${
                          isLogin 
                            ? 'text-blue-600 dark:text-blue-400' 
                            : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400'
                        }`}
                      >
                        Sign In
                      </button>
                    </div>
                    
                    {isLogin && (
                      <Login
                        onLogin={login}
                        onForgotPassword={forgotPassword}
                        isLoading={isLoading}
                        error={error}
                        onClearError={clearError}
                      />
                    )}
                  </div>
                </div>

                {/* Right Side - Register */}
                <div className={`flex-1 p-12 transition-all duration-500 ${
                  !isLogin 
                    ? 'bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20' 
                    : 'bg-gray-50 dark:bg-gray-700'
                }`}>
                  <div className="flex flex-col justify-center h-full">
                    <div className="mb-8">
                      <button
                        onClick={() => {
                          setIsLogin(false);
                          clearError();
                        }}
                        className={`text-2xl font-bold transition-all duration-200 ${
                          !isLogin 
                            ? 'text-purple-600 dark:text-purple-400' 
                            : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400'
                        }`}
                      >
                        Sign Up
                      </button>
                    </div>
                    
                    {!isLogin && (
                      <Register
                        onRegister={register}
                        isLoading={isLoading}
                        error={error}
                        onClearError={clearError}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              {/* Toggle Buttons */}
              <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1 mb-8">
                <button
                  onClick={() => {
                    setIsLogin(true);
                    clearError();
                  }}
                  className={`flex-1 py-2 px-4 rounded-md font-medium transition-all duration-200 ${
                    isLogin
                      ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    setIsLogin(false);
                    clearError();
                  }}
                  className={`flex-1 py-2 px-4 rounded-md font-medium transition-all duration-200 ${
                    !isLogin
                      ? 'bg-white dark:bg-gray-600 text-purple-600 dark:text-purple-400 shadow-sm'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  Sign Up
                </button>
              </div>

              {/* Form Content */}
              <div className="transition-all duration-300">
                {isLogin ? (
                  <Login
                    onLogin={login}
                    onForgotPassword={forgotPassword}
                    isLoading={isLoading}
                    error={error}
                    onClearError={clearError}
                  />
                ) : (
                  <Register
                    onRegister={register}
                    isLoading={isLoading}
                    error={error}
                    onClearError={clearError}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Auth;