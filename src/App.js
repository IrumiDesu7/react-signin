import { useState } from 'react';
import LoginForm from './components/LoginForm';

function App() {
  const adminUser = {
    email: 'admin@admin.com',
    password: 'admin123',
  };

  const [user, setUser] = useState({ name: '', email: '' });
  const [error, setError] = useState('');

  const login = (details) => {
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      setError(
        "Email or password doesn't match. Please contact your administrator"
      );
    }
  };

  const logout = () => {
    console.log('Logged out!');
    setUser({
      name: '',
      email: '',
    });
    setError('');
  };

  return (
    <div className='App'>
      {user.email === '' ? (
        <LoginForm login={login} error={error} />
      ) : (
        <div className='welcome'>
          <h2>
            Welcome <span>{user.name}</span>
          </h2>
          <button onClick={logout} className='btn-logout'>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
