import { useState } from 'react';
import  useShowToast  from './useShowToast';
import { apiClient } from '../libs/apiClient'; // Adjust the import path as necessary
import { LOGIN_ROUTE } from '../utils/constants';
import { useStore } from '../store/store';

interface LoginData {
  email: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  message: string;
  user?: any; // Adjust this to your user data structure
}

interface UseLoginReturn {
  login: (data: LoginData) => Promise<LoginResponse | undefined>;
  loading: boolean;
  error: string | null;
}

const useLogin = (): UseLoginReturn => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { setUser , user } : any = useStore(); // Get the setUser function from the store
  const { useToast } : any = useShowToast();

  const login = async (data: LoginData): Promise<LoginResponse | undefined> => {
    setLoading(true);
    try {
        if(user){
            useToast({
                title: 'User already logged in.',
                description: "you are already logged in",
                status: 'info',
              })
            return user;
        }
      const response = await apiClient.post<LoginResponse>(LOGIN_ROUTE, data);

      // Show success toast notification
      useToast({
        title: 'User Sign in successfully.',
        description: "you Signed up successfully",
        status: 'success',
      })

      setUser(response.data.user); // Set user data in store

      return response.data;
    } catch (err) {
      // Show error toast notification
      useToast({
        title: 'An error occurred.',
        description: (err as Error).message,
        status: 'error',
      })
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};

export default useLogin;
