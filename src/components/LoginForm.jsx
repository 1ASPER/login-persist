import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/slices/loginFormSlice';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      dispatch(login(email));
    } else {
      setError('Введите корректный email');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow-md w-80"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Вход</h2>
        <input
          type="email"
          className="w-full p-2 border rounded mb-2"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError('');
          }}
        />
        {error && (
          <p className="text-red-500 text-sm mb-2">{error}</p>
        )}
        <button
          type="submit"
          className={`w-full py-2 rounded text-white ${
            validateEmail(email)
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
          disabled={!validateEmail(email)}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
