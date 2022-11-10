import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './components/Router/Router';

function App() {
  return (
    <div className="px-auto mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
