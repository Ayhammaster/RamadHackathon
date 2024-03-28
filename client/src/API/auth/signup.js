async function signup(userData) {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    };
  
    try {
      const response = await fetch('/signup', requestOptions);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error signing up:', error);
      throw error;
    }
}
  
export { signup };
  