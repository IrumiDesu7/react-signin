import { useState } from 'react';
import eye from '../eye.svg';
import eyeSlashed from '../eye_slashed.svg';

console.log(eye);
export default function LoginForm(props) {
  const [details, setDetails] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [passwordType, setPasswordType] = useState('password');

  function handleChange(e) {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.login(details);
  }

  function togglePassword() {
    setPasswordType((prevType) => {
      return prevType === 'password' ? 'text' : 'password';
    });
  }

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <div className='form-inner'>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Your Name'
            onChange={handleChange}
            value={details.name}
          />
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Your Email'
            onChange={handleChange}
            value={details.email}
          />

          <div className='password-container'>
            <input
              type={passwordType}
              name='password'
              id='password'
              placeholder='Your Password'
              onChange={handleChange}
              value={details.password}
            />
            {/* <button
              className='password-toggle'
              type='button'
              onClick={togglePassword}
            > */}
            <img
              className='password-toggle'
              onClick={togglePassword}
              src={passwordType === 'password' ? eyeSlashed : eye}
              alt=''
            />
            {/* </button> */}
          </div>
          {props.error !== '' && (
            <div className='error-container'>
              <p>{props.error}</p>
            </div>
          )}
          <button className='login-btn'>Login</button>
        </div>
      </form>
    </div>
  );
}
