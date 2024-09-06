// Define the User interface according to your application's user data structure
export interface User {
    id: string;
    name: string;
    email: string;
    // Add more fields as needed
  }
  
  export interface UserState {
    user: any | null; // User can be null if not logged in
    setUser: (user: any | null) => void;
  }
  
  // Function to create the user slice
  export const fetchUserSlice = (set: any): UserState => ({
    user: null,
    setUser: (user) => set({ user }),
  });

  
