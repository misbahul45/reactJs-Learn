
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UseCallback from './pages/UseCallback';
import UseContext from './pages/UseContext';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='w-full min-h-screen bg-slate-800 flex flex-col items-center justify-center'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/useCallback' element={<UseCallback />} />
          <Route path='/usecontext' element={<UseContext />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
