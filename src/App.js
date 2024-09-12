import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Blogs from './Pages/Blogs';
import Blogdetails from './Pages/Blogdetails';
import Error404 from './Pages/Error404';


function App() {
  let allRoutes = createBrowserRouter(
    [
      { 
        path:'/',
        element: <Home/>     
      },
      {
        path: 'about',
        element:<About/>
      },
      {
        path: 'contactus',
        element: <ContactUs/>
      },
      {
        path:'blogs',
        element:<Blogs/>//these are static routes
      },
      {
        path:'blogs/:id',
        element:<Blogdetails/>//this is dyanmic route as it render all id 
      },
      {
        path:'*',//It calls when no routes matches
        element:<Error404/>
      }
    ])
      return (
    <div className="App">
    <RouterProvider router={allRoutes}>
      
    </RouterProvider>
    </div>
  );
}

export default App;
