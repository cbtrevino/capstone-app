import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders the Header heading', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const headingElement = screen.getByText("Reserve Table");
  expect(headingElement).toBeInTheDocument();

  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);

  const headingElementNew = screen.getByText("Choose Date");
  expect(headingElementNew).toBeInTheDocument();
})