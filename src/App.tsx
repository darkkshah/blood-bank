import './App.css';
import Router from './config/router';
import store from "./config/redux/store";
import { Provider } from 'react-redux';

function App() {
  return (
    <div >
      <Provider store={store}>
        <Router />
      </Provider>
    </div>

  );
}

export default App;
