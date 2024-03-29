async function LoginHandler(loginData) {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    };
  
    try {
      const response = await fetch('https://ramadhackathon-1.onrender.com/login', requestOptions);
      if (response.status === 401) {
        throw new Error('Invalid username or password');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
}
  
export { LoginHandler };