import { render, screen } from '@testing-library/react';
import Chat from '../components/Chat';

test('renders chat input', () => {
  render(<Chat />);
  const inputElement = screen.getByPlaceholderText(/Type your message/i);
  expect(inputElement).toBeInTheDocument();
});

