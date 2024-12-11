// src/apis/authApi.ts

interface SignInData {
  userEmail: string;
  userPassword: string;
}

interface RegisterData {
  userEmail: string;
  userName: string;
  userPassword: string;
  userPwConfirm: string;
}

const apiUrl = 'http://localhost:8080/api/auth';

export const signIn = async (signInData: SignInData): Promise<Response> => {
  try {
    const response = await fetch(`${apiUrl}/signIn`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signInData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to sign in');
    }

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error during sign in:', error.message);
      throw error;
    } else {
      throw new Error('An unexpected error occurred during sign in.');
    }
  }
};

export const register = async (registerData: RegisterData): Promise<Response> => {
  try {
    const response = await fetch(`${apiUrl}/signUp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to register');
    }

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error during registration:', error.message);
      throw error;
    } else {
      throw new Error('An unexpected error occurred during registration.');
    }
  }
};