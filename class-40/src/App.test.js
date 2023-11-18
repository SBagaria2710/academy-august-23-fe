import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('should check whether four list items rendered', () => {
  render(<App />);
  const listItems = screen.getAllByRole('listitem');
  expect(listItems).toHaveLength(5);
})

test('render heading h1', () => {
  render(<App />);
  const headingElem = screen.getByTestId('test_id_1');
  expect(headingElem).toBeInTheDocument();
})

