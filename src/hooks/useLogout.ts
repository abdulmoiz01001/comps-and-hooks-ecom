import { useState } from 'react';
import  useShowToast  from './useShowToast';
import { apiClient } from '../libs/apiClient'; // Adjust the import path as necessary
import { LOGOUT_ROUTE } from '../utils/constants';
import { useStore } from '../store/store';

interface LogoutResponse {
  success: boolean;
  message: string;
}

interface UseLogoutReturn {
  logout: () => Promise<LogoutResponse | undefined>;
  loading: boolean;
  error: string | null;
}

const useLogout = (): UseLogoutReturn => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { setUser } : any = useStore(); // Get the setUser function from the store
  const { useToast } : any = useShowToast();

  const logout = async (): Promise<LogoutResponse | undefined> => {
    setLoading(true);
    try {
      const response = await apiClient.post<LogoutResponse>(LOGOUT_ROUTE);

      // Show success toast notification
      useToast({
        title: 'User logged out successfully.',
        description: 'You have been logged out',
        status: 'success',
       
      });

      setUser(null); // Clear user data from store

      return response.data;
    } catch (err) {
      // Show error toast notification
      useToast({
        title: 'An error occurred.',
        description: (err as Error).message,
        status: 'error',
    
      });
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { logout, loading, error };
};

export default useLogout;
