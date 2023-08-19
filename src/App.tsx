import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthContextProvider from 'context/AuthContext';
import Navbar from 'components/layout/Navbar';
import { Outlet } from 'react-router-dom';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <div className='pb-28'>
          <Navbar />
          <Outlet />
        </div>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
