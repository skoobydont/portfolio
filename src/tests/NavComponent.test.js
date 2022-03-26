import {
  render,
  screen,
} from '@testing-library/react';
import NavComponent from '../components/NavComponent';

describe('nav component tests', () => {
  // Setup
  beforeEach(() => {
    render(<NavComponent />);
  });

  test('nav component renders', () => {
    // Ensure parent component renders
    const navComponent = screen.getByTestId('Nav');
    expect(navComponent).toBeInTheDocument();
  });

  test('home button renders', () => {
    // Ensure button renders
    const navButton = screen.getByText(/skubak.aj/i);
    expect(navButton).toBeInTheDocument();
  });
});