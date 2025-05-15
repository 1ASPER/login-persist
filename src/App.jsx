import { useSelector } from 'react-redux';
import LoginForm from './components/LoginForm';
import LoggedInView from './components/LoggedInView';

const App = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  return (
    <div className="min-h-screen bg-gray-100">
      {isLoggedIn ? <LoggedInView /> : <LoginForm />}
    </div>
  );
};

export default App;