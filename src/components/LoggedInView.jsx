import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/slices/loginFormSlice';

const LoggedInView = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.login.email);

  return (
    <div className="flex justify-center items-center h-screen bg-green-100">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-xl font-semibold mb-4">
          Добро пожаловать, <span className="text-green-700">{email}</span>!
        </h2>
        <button
          onClick={() => dispatch(logout())}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default LoggedInView;