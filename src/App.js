import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route} from 'react-router-dom';
import { StreamCreate, StreamDelete, StreamEdit, StreamList, StreamShow } from './components/streams';
import Header from './components/Header';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Header />
            <Route path='/' exact component={StreamList}/>
            <Route path='/streams/new' component={StreamCreate}/>
            <Route path='/streams/edit' component={StreamEdit}/>
            <Route path='/streams/delete' component={StreamDelete}/>
            <Route path='/streams/show' component={StreamShow}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
