export interface User {
  id: string;
  email: string;
  name?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  confirmPassword: string;
  name?: string;
}

export interface AuthError {
  field?: string;
  message: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: AuthError | null;
}