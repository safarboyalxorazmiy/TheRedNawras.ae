import './index.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

const App = () => {

  return (
    <div className="bg-gradient-main min-h-screen px-4 flex flex-col items-center text-white font-medium">
      <div className="w-full z-10 min-h-screen flex flex-col items-center text-white">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;