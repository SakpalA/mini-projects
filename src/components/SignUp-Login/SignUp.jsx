import React, { useState } from 'react'

const SignUp = ({ setLoggedIn }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
      const [error, setError] = useState('');
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match');
          return;
        }
        try {
          const response = await fetch('https://65c488e7dae2304e92e2c7b3.mockapi.io/records/students', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          if (response.ok) {
            // Sign up successful
            setLoggedIn(true);
          } else {
            // Handle sign up error
            setError('Sign up failed');
          }
        } catch (error) {
          console.error('Error:', error);
          setError('An error occurred while signing up');
        }
      };
  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Sign Up</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}

export default SignUp;