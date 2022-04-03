import {
  screen,
  render,
  cleanup,
  fireEvent,
} from '@testing-library/react';
import React from 'react';
import ExpToggle from '../components/ExpToggle';
import Theme from '../components/Theme';

describe('exp toggle component tests', () => {
  // Setup
  let exp = 'professional';
  const setExp = (newExp: {}) => {};
  // Clean up
  afterEach(() => {
    cleanup();
  });

  test('parent div renders', () => {
    // Cannot put into beforeEach since last test needs access to rerenderer
    render(
      <Theme>
        <ExpToggle
          exp={exp}
          setExp={setExp}
        />
      </Theme>
    );
    const expToggle = screen.getByTestId(/exptoggle/i);
    expect(expToggle).toBeInTheDocument();
  });

  test('button renders with text inside', () => {
    // Cannot put into beforeEach since last test needs access to rerenderer
    render(
      <Theme>
        <ExpToggle
          exp={exp}
          setExp={setExp}
        />
      </Theme>
    );
    const toggleButton = screen.getByRole('button');
    expect(toggleButton).toBeInTheDocument();

    const textWithinBtn = toggleButton.children;
    expect(textWithinBtn.length).toBeGreaterThan(0);
  });

  test('text updates when button clicked', () => {
    // Cannot put into beforeEach since last test needs access to rerenderer
    const {
      rerender
    } = render(
      <Theme>
        <ExpToggle
          exp={exp}
          setExp={setExp}
        />
      </Theme>
    );
    // Default should show professional
    const professionalText = screen.getByText(/professional/i);
    expect(professionalText.className.includes('active')).toBeTruthy();
    // Get Button & click
    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);
    // Rerender
    rerender(
      <Theme>
        <ExpToggle
          exp={"personal"}
          setExp={setExp}
        />
      </Theme>
    );    
    // Now personal text should be active
    const personalText = screen.getByText(/personal/i);
    expect(personalText.className.includes('active')).toBeTruthy();
    // Ensure professional is not active
    expect(professionalText.className.includes('active')).toBeFalsy();
  });
});