import React, { useState } from 'react';
import './LoginSignup.css'; // Import your CSS file

function LoginSignup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]); // Store user data

  // Function to check if any input field is empty
  const isFormIncomplete = () => {
    return !name || !email || !phone || !address;
  };

  const handleSignup = () => {
    // Check if the email already exists
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      setMessage('This email is already occupied.');
    } else {
      // Create a new user object
      const newUser = { name, email, phone, address };
      // Add the new user to the list
      setUsers([...users, newUser]);
      // Reset the form and show a success message
      setName('');
      setEmail('');
      setPhone('');
      setAddress('');
      setMessage('Signup successful. You can now login.');
    }
  };

  return (
    <div className="login-signup-container">
      <h2 className="login-signup-heading">Login or Signup</h2>
      <div className="form-group">
        <label htmlFor="name" className="input-label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          className="login-signup-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="input-label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="login-signup-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone" className="input-label">
          Phone:
        </label>
        <input
          type="tel"
          id="phone"
          className="login-signup-input"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="address" className="input-label">
          Address:
        </label>
        <input
          type="text"
          id="address"
          className="login-signup-input"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <button
        className="login-signup-button"
        onClick={handleSignup}
        disabled={isFormIncomplete()} // Disable the button if the form is incomplete
      >
        Signup
      </button>
      <p className="login-signup-message">{message}</p>
    </div>
  );
}

export default LoginSignup;
