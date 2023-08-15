import AuthContextProvider from 'components/context/AuthContext';
import Navbar from 'components/layout/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <AuthContextProvider>
      <Navbar />
      <Outlet />
    </AuthContextProvider>
  );
}

export default App;
