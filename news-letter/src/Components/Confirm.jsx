import React from 'react'
import { useLocation , useNavigate} from 'react-router-dom';
const Confirm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { email } = location.state || {};

  const goBack = () => {
    navigate('/');

  }
  return (
    <main>
    <div className='confirmation'>
      <div>
        <img src="./icon-success.svg" alt="success icon" />
        <h1>Thanks for subscribing!</h1>
        <p>A confirmation email has been sent to <span>{email ? email : "email"} </span> 
        Please open it and click the button inside to confirm your subscription.</p>
        </div>
        <div className='confirmation-btn'>
        <button onClick={goBack}>Dismiss message</button>
        </div>
    </div>
    </main>
  )
}

export default Confirm