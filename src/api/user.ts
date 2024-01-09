import { ApiResponse } from '../types/user';

const getUser = async (): Promise<ApiResponse> => {
    const url = 'https://randomuser.me/api/';
    try {
      const response = await fetch(url);
      if (!response.ok) { 
        //if the api service goes offline and api call returns an error
        const errorResponse = await response.json();
        throw errorResponse;
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw error; 
    }
  };
  
  export { getUser };