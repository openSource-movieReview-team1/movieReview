import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <h1>영화 리뷰 플랫폼</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
