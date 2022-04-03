import {
  render,
  screen,
  cleanup,
} from '@testing-library/react';
import React from 'react';
import NavComponent from '../components/NavComponent';
import Theme from '../components/Theme';

describe('nav component tests', () => {
  // Setup
  beforeEach(() => {
    render(
      <Theme>
        <NavComponent />
      </Theme>
    );
  });
  // Cleanup
  afterEach(() => {
    cleanup();
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