import { render, screen } from '@testing-library/react';
import SearchInput from './components/SerchInput';

test('check if ther are event response and is object', () => {
  render(<SearchInput />);
  const event = screen.getByText(/Enter a location/i);
  expect(event).toBe("object");
});
