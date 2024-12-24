import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css';
//Components
import App from './App.tsx';
import PageView from './components/layout/PageView.tsx';
//Redux
import reduxStore from './redux/reduxStore.ts';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={reduxStore}>
    <PageView>
     <App />
    </PageView>
    </Provider>
  </StrictMode>,
)
