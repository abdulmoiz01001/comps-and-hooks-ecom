import { useState } from 'react';
import  useShowToast  from './useShowToast';
import { apiClient } from '../libs/apiClient'; // Adjust the import path as necessary
import { SIGNUP_ROUTE } from '../utils/constants';
import { useStore } from '../store/store';

interface SignupData {
  name: string;
  email: string;
  password: string;
}

interface SignupResponse {
  success: boolean;
  message: string;
  user?: any; // Adjust this to your user data structure
}

interface UseSignupReturn {
  signup: (data: SignupData) => Promise<SignupResponse | undefined>;
  loading: boolean;
  error: string | null;
}

const useSignup = (): UseSignupReturn => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { user , setUser } : any = useStore()
    const { useToast } : any = useShowToast();

  const signup = async (data: SignupData): Promise<SignupResponse | undefined> => {
    setLoading(true);
    try {
        if(user){
            useToast({
                title: 'User already Sign up.',
                description: "you are already logged in",
                status: 'info',
              })
            return user;
        }
      const response = await apiClient.post<SignupResponse>(SIGNUP_ROUTE, data);

      // Show success toast notification
      useToast({
        title: 'Signup successfully.',
        description: "you Signed up successfully",
        status: 'success',
      })

      setUser(response.data.user)

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

  return { signup, loading, error };
};

export default useSignup;
