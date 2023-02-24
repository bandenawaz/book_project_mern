import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateBook from './components/CreateBook';
import ShowBookList from './components/ShowBookList';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<ShowBookList />} />
          <Route path='/createBook' element={<CreateBook />} />
          <Route path='/editBook' element={<UpdateBookInfo />} />
          <Route path='/showBook/:id' element={<ShowBookDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
