import { useToast, UseToastOptions } from '@chakra-ui/react';
import { useCallback } from 'react';

// Define the status types based on Chakra UI's toast status
type ToastStatus = 'info' | 'warning' | 'success' | 'error';

const useShowToast = () => {
  const toast = useToast();

  const showToast = useCallback(
    (title: string, description: string, status: ToastStatus) => {
      toast({
        title,
        description,
        status,
        duration: 3000,
        isClosable: true,
      });
    },
    [toast]
  );

  return showToast;
};

export default useShowToast;
