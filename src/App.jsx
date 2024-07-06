import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MemoriesPage from './pages/Memories'
import MemoryPage from './pages/Memory';
import RootLayout from './pages/RootLayout';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          path: '/memories',
          element: <MemoriesPage />,
        },
        {
          path: '/memories/:memoryId',
          element: <MemoryPage />,
        },
      ],
    },
    
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
