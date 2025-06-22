import { useState, useCallback } from 'react';
import { AuthState, LoginData, RegisterData, AuthError } from '../types/auth';

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isLoading: false,
    error: null,
  });

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    return password.length >= 8;
  };

  const login = useCallback(async (data: LoginData) => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));

    // Validation
    if (!validateEmail(data.email)) {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: { field: 'email', message: 'Please enter a valid email address' }
      }));
      return;
    }

    if (!validatePassword(data.password)) {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: { field: 'password', message: 'Password must be at least 8 characters long' }
      }));
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful login
      setAuthState({
        user: { id: '1', email: data.email },
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: { message: 'Login failed. Please check your credentials.' }
      }));
    }
  }, []);

  const register = useCallback(async (data: RegisterData) => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));

    // Validation
    if (!validateEmail(data.email)) {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: { field: 'email', message: 'Please enter a valid email address' }
      }));
      return;
    }

    if (!validatePassword(data.password)) {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: { field: 'password', message: 'Password must be at least 8 characters long' }
      }));
      return;
    }

    if (data.password !== data.confirmPassword) {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: { field: 'confirmPassword', message: 'Passwords do not match' }
      }));
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful registration
      setAuthState({
        user: { id: '1', email: data.email, name: data.name },
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: { message: 'Registration failed. Please try again.' }
      }));
    }
  }, []);

  const forgotPassword = useCallback(async (email: string) => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));

    if (!validateEmail(email)) {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: { field: 'email', message: 'Please enter a valid email address' }
      }));
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: null,
      }));
      
      // You would typically show a success message here
      alert('Password reset link sent to your email!');
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: { message: 'Failed to send reset link. Please try again.' }
      }));
    }
  }, []);

  const logout = useCallback(() => {
    setAuthState({
      user: null,
      isLoading: false,
      error: null,
    });
  }, []);

  const clearError = useCallback(() => {
    setAuthState(prev => ({ ...prev, error: null }));
  }, []);

  return {
    ...authState,
    login,
    register,
    forgotPassword,
    logout,
    clearError,
  };
};