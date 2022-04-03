import {
  cleanup,
  render,
  screen,
} from '@testing-library/react';
import React from 'react';
import App from './App';

describe('main app file tests', () => {
  // Reusable logic for each test case
  beforeEach(() => {
    render(<App />);
  });
  // Cleanup
  afterEach(() => {
    cleanup();
  });

  test('renders nav component', () => {
    // Ensure nav bar component renders
    const navComponent = screen.getByTestId(/nav/i);
    expect(navComponent).toBeInTheDocument();
  });

  test('renders content between header & footer', () => {
    // Ensure app container element renders
    const appContent = screen.getByTestId('app');
    expect(appContent).toBeInTheDocument();
  });

  test('renders footer & its buttons', () => {
    // Ensure footer parent element renders
    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();
    
    // Ensure at least some buttons render in footer
    const allButtons = screen.getAllByRole('button');
    expect(allButtons.length).toBeGreaterThan(0);    
  });
  
});
