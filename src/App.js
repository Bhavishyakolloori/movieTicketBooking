import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import RootLayout from './Components/RootLayout';
import Home from './Components/Home/Home';
import CompleteData from './Components/CompleteData';
import Form from './Components/Form/Form';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children :[
        {
          path:"/",
          element:<Home/>
        },
        {
          path: "/complete-data/:id",
          element:<CompleteData/>
        },
        {
          path: "/book-tickets/:name",
          element: <Form/>
        }
      ]
    }
  ])
  return (
    <div className='app bg-dark'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
