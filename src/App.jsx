import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/page/HomePage';
import TaskDetailsPage from './components/page/TaskDetails';
import NotfoundPage from './components/page/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks/:id" element={<TaskDetailsPage />} />
        <Route path="/*" element={<NotfoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
