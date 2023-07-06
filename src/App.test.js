
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders a link', () => {
  render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
  )
  const linkElement = screen.getByText(/list of apartments/i);
  expect(linkElement).toBeInTheDocument();
});