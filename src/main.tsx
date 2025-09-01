import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Get the root element from the HTML
const container = document.getElementById('root');

if (container) {
  const root = createRoot(container); // create a React root
  root.render(<App />);               // render your App component
} else {
  console.error('Root container not found');
}
