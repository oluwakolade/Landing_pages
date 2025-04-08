import { useState } from "react";
import {useNavigate}  from 'react-router-dom';
import React from 'react'

const Body = () => {
      const [email, setEmail] = useState(''); 
      const [error, setError] = useState('')
      const navigate = useNavigate();
      
      const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue); 
        console.log(emailValue);
      }
    
    const validateEmail = (email) => {
      const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailPattern.test(email);
    };
    
      
    
    
    const handleSubmit = (e) => {
      e.preventDefault(); 
      if (email.trim() === '') {
        setError('Email is required'); 
      } else if (!validateEmail(email)) {
        setError('Please enter a valid email address'); 
      } else {
        setError('');
        navigate('/confirmation', { state: { email } });
      }
    };
    
  return (
    <main>
    <section>
    <div className="left">
      <h1>Stay updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <ul className="list">
        <li>
          <img src="/icon-list.svg" alt="list icon" />
          <span> Product discovery and building what matters </span>
        </li>
        <li>
          <img src="/icon-list.svg" alt="list icon" />

          <span>Measuring to ensure updates are a success </span>
        </li>
        <li>
          <img src="/icon-list.svg" alt="list icon" />

          <span>And much more! </span>
        </li>
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="label">
        <label htmlFor="">Email address</label>
        {error && <span className="error">{error}</span>}
        </div>
        <input type="email" 
        className= { error ? "error-input" : ""}
        name="email"
        placeholder="email@company.com"
        value={email}
        onChange={handleEmailChange}
        />
        <button type="submit"> Subscribe to monthly newsletter</button>
      </form>
    </div>

    {/* left */}
    <div className="right">
      <img
        src="/illustration-sign-up-desktop.svg"
        alt="signup illustration desktop"
        className="desktop-img"
      />
      <img
        src="/illustration-sign-up-mobile.svg"
        alt="signup illustration mobile"
        className="mobile-img"
      />
    </div>
  </section>
  </main>
  )
}

export default Body