import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom'
import store from './store.tsx';

const root = document.getElementById('root');

ReactDOM.createRoot(root!).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)
