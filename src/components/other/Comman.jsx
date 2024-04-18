import React from 'react'

const Comman = () => {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
    e.preventDefault();

    try {
      const response = await fetch('your-api-endpoint/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      // If authentication is successful, you might redirect the user to another page
      // window.location.href = '/dashboard';
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
    
    </>
  )
}

export default Comman